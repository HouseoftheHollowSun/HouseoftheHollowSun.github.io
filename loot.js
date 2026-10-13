// ── State ──
    let activeCategory = null;   // null = none, string = cat name, 'MULTI' = multi-station
    let activeStation  = null;   // null = none, string = station name (exclusive mode)

    const STATION_KEYS = {
        "Station 24":  "s24",
        "Station 89":  "s89",
        "Station 136": "s136",
        "Station 152": "s152",
        "Station 195": "s195",
        "The Quarry":  "qry"
    };
    const STATION_NAMES = Object.keys(STATION_KEYS);

    function isMultiStation(row) {
        return STATION_NAMES.filter(s => row[STATION_KEYS[s]] !== "—").length >= 2;
    }
    function isExclusiveTo(row, station) {
        const key = STATION_KEYS[station];
        if (row[key] === "—") return false;
        return STATION_NAMES.filter(s => row[STATION_KEYS[s]] !== "—").length === 1;
    }

    // ── Toggle helpers ──
    function setCategory(btn) {
        const val = btn.dataset.cat;
        if (activeCategory === val) {
            activeCategory = null;
            btn.classList.remove('active');
        } else {
            activeCategory = val;
            document.querySelectorAll('#grpCat .f-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Station and category are mutually exclusive
            activeStation = null;
            document.querySelectorAll('#grpStation .f-btn').forEach(b => b.classList.remove('active'));
        }
        applyFilters();
    }

    function setStation(btn) {
        // "All Stations" button lives in the station row but is a category filter
        if (btn.dataset.cat === 'MULTI') { setCategory(btn); return; }

        const val = btn.dataset.station;
        if (activeStation === val) {
            activeStation = null;
            btn.classList.remove('active');
        } else {
            activeStation = val;
            document.querySelectorAll('#grpStation .f-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            // Station and category are mutually exclusive
            activeCategory = null;
            document.querySelectorAll('#grpCat .f-btn').forEach(b => b.classList.remove('active'));
        }
        applyFilters();
    }

    // ── Main filter & render ──
    function applyFilters() {
        const q = document.getElementById('dbSearch').value.toLowerCase().trim();
        const hasFilter = activeCategory || activeStation || q;

        if (!hasFilter) { showIdle(); return; }

        let filtered = masterLootRegistry.filter(row => {
            if (q && !row.name.toLowerCase().includes(q)) return false;
            if (activeCategory === 'MULTI') return isMultiStation(row);
            if (activeCategory) return row.cat === activeCategory;
            if (activeStation)  return isExclusiveTo(row, activeStation);
            return true;
        });

        // Determine display mode
        const exclusiveMode = !!activeStation;
        const label = activeStation
            ? `${activeStation} — exclusive drops`
            : activeCategory === 'MULTI'
                ? 'Found in multiple stations'
                : activeCategory || 'Search results';

        renderTable(filtered, label, exclusiveMode);
    }

    function rateClass(val) {
        if (!val || val === "—") return "rate-none";
        const n = parseInt(val);
        if (n >= 10) return "rate-high";
        if (n >= 5)  return "rate-mid";
        return "rate-low";
    }

    function catClass(cat) {
        return "cat-" + cat.toLowerCase();
    }

    function renderTable(items, label, exclusiveMode) {
        const panel = document.getElementById('dbResults');
        document.getElementById('db-count').textContent = items.length;

        if (items.length === 0) {
            panel.innerHTML = '<div class="db-empty">No items found in the archive.</div>';
            return;
        }

        // Build header columns
        let headerCols = '';
        if (exclusiveMode) {
            headerCols = `<th class="rate-th">Drop Rate</th>`;
        } else {
            headerCols = STATION_NAMES.map(s => `<th class="rate-th">${s.replace('Station ', '').replace('The Quarry', 'The Quarry')}</th>`).join('');
        }

        // Build rows
        const rows = items.map(row => {
            let rateCells = '';
            if (exclusiveMode) {
                const key = STATION_KEYS[activeStation];
                const r = row[key];
                rateCells = `<td class="td-rate ${rateClass(r)}">${r || '—'}</td>`;
            } else {
                rateCells = STATION_NAMES.map(s => {
                    const r = row[STATION_KEYS[s]];
                    return `<td class="td-rate ${rateClass(r)}">${r || '—'}</td>`;
                }).join('');
            }
            return `<tr>
                <td class="td-name">${row.name}</td>
                <td class="td-cat ${catClass(row.cat)}">${row.cat}</td>
                ${rateCells}
            </tr>`;
        }).join('');

        panel.innerHTML = `
            <div class="db-result-bar">
                <span class="db-result-title">${label}</span>
                <span class="db-result-count">${items.length} items</span>
            </div>
            <div class="table-wrap">
                <table>
                    <thead><tr>
                        <th>Item</th>
                        <th>Category</th>
                        ${headerCols}
                    </tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>`;
    }

    function showIdle() {
        document.getElementById('db-count').textContent = masterLootRegistry.length;
        document.getElementById('dbResults').innerHTML = `
            <div class="db-idle">
                <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" class="db-idle-sun">
                    <circle cx="28" cy="28" r="24" fill="none" stroke="#1a0a04" stroke-width="0.5"/>
                    <circle cx="28" cy="28" r="18" fill="none" stroke="#220e06" stroke-width="0.5"/>
                    <circle cx="28" cy="28" r="12" fill="none" stroke="#2a1008" stroke-width="0.5" stroke-dasharray="3 4"/>
                    <circle cx="28" cy="28" r="7"  fill="none" stroke="#3a1408" stroke-width="1"/>
                    <circle cx="28" cy="28" r="3"  fill="#1a0604" stroke="#8b1a1a" stroke-width="0.8"/>
                    <polygon points="28,4  29.5,10  28,8.5  26.5,10"  fill="#4a1a1a"/>
                    <polygon points="28,52 29.5,46  28,47.5 26.5,46"  fill="#4a1a1a"/>
                    <polygon points="4,28  10,26.5  8.5,28  10,29.5"  fill="#4a1a1a"/>
                    <polygon points="52,28 46,26.5  47.5,28 46,29.5"  fill="#4a1a1a"/>
                </svg>
                <p class="db-idle-text">Select a category or station to reveal the archive.</p>
                <p class="db-idle-sub">Or search by name above</p>
            </div>`;
    }
