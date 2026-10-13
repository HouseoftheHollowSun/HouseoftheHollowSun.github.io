// ── Min/Max State ──
    let mmActiveDmg = null;
    let mmActiveAug = '3';

    const MM_DATA = {
        body3: [
            { rank:1,  weapon:"Perforator",                       type:"Body",     build:["Heavy Caliber Upgrade","GRDA 44 Amplifier","Scattergun Rampage-Enhancement"],                  sdps:4099.8, bdps:5931.9,  notes:"" },
            { rank:2,  weapon:"Regis Tripleshot Repeating Rifle", type:"Body",     build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                  sdps:3852.9, bdps:5401.8,  notes:"" },
            { rank:3,  weapon:"Spitting Cobra",                   type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                     sdps:3811.7, bdps:4740.4,  notes:"" },
            { rank:4,  weapon:"Shellburster",                     type:"Body",     build:["Heavy Caliber Upgrade","Scattergun Rampage-Enhancement","Quick-release Trigger"],              sdps:3531.4, bdps:4350.6,  notes:"" },
            { rank:5,  weapon:"Blind Fury",                       type:"Body",     build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                  sdps:3235.8, bdps:3888.0,  notes:"" },
            { rank:6,  weapon:"Plasma Cannon",                    type:"Body",     build:["VULCAN GAU-92 Expander","Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating"],           sdps:3348.4, bdps:3348.4,  notes:"" },
            { rank:7,  weapon:"The Hateful Barker",               type:"Body",     build:["VULCAN GAU-92 Expander","Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating"],           sdps:3131.8, bdps:3643.3,  notes:"" },
            { rank:8,  weapon:"Sardaukar Intimidator",            type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                     sdps:2872.5, bdps:3632.3,  notes:"" },
            { rank:9,  weapon:"A Dart for Every Man",             type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                     sdps:2784.4, bdps:3293.2,  notes:"" },
            { rank:10, weapon:"Way of the Misr",                  type:"Body",     build:["Heavy Caliber Upgrade","Maula Pistol Expander","Maula Pistol Antipersonnel Rounds"],           sdps:2524.9, bdps:3077.8,  notes:"" },
            { rank:11, weapon:"Dunewatcher",                      type:"Body",     build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                  sdps:2460.1, bdps:3596.7,  notes:"" },
            { rank:12, weapon:"Black Market K-28 Lasgun",         type:"Body",     build:["Heavy Caliber Upgrade","Lasgun Amplifier","Lasgun Harmonizer"],                                sdps:2414.3, bdps:6386.2,  notes:"" },
            { rank:13, weapon:"Bashar's Command",                 type:"Body",     build:["Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating","VULCAN GAU-92 Expander"],          sdps:2433.9, bdps:2911.0,  notes:"" },
            { rank:14, weapon:"The Angry Adder",                  type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Karpov 38 Precision Kit"],                       sdps:2143.5, bdps:2721.3,  notes:"" },
            { rank:15, weapon:"Salusan Vengeance",                type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Karpov 38 Precision Kit"],                       sdps:1990.3, bdps:2656.2,  notes:"" },
            { rank:16, weapon:"Shishakli's Bite",                 type:"Body",     build:["Heavy Caliber Upgrade","Maula Pistol Expander","Maula Pistol Antipersonnel Rounds"],           sdps:1965.1, bdps:2600.9,  notes:"" },
            { rank:17, weapon:"Hell-Fury Pistol",                 type:"Body",     build:["Heavy Caliber Upgrade","Rafiq Snubnose Expander","Rafiq Snubnose Heavy Kit"],                  sdps:1742.7, bdps:1986.7,  notes:"" },
            { rank:18, weapon:"Seethe\u00B3",                     type:"Body",     build:["Heavy Caliber Upgrade","Rafiq Snubnose Expander","Rafiq Snubnose Heavy Kit"],                  sdps:1693.5, bdps:2568.1,  notes:"" },
            { rank:19, weapon:"The Ancient Way\u00B2",            type:"Body",     build:["Heavy Caliber Upgrade","Missile Launcher Fragmenter","Missile Launcher Heavy Payload"],        sdps:1366.2, bdps:5279.3,  notes:"" },
            { rank:20, weapon:"Vaporizer",                        type:"Body",     build:["Heavy Caliber Upgrade","Flamethrower Amplifier","Flamethrower Superheater"],                   sdps:1050.1, bdps:1291.7,  notes:"" },
            { rank:21, weapon:"Regis Disruptor Pistol",           type:"Body",     build:["Heavy Caliber Upgrade","Rafiq Snubnose Disruptive Coating","Rafiq Snubnose Heavy Kit"],        sdps:1048.2, bdps:1206.9,  notes:"" },
            { rank:22, weapon:"Indara's Lullaby",                 type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Quick-release Trigger"],                         sdps:968.5,  bdps:1291.0,  notes:"" },
            { rank:23, weapon:"Glasser",                          type:"Body",     build:["Heavy Caliber Upgrade","Flamethrower Amplifier","Flamethrower Superheater"],                   sdps:956.4,  bdps:1202.0,  notes:"" },
            { rank:24, weapon:"Ambition",                         type:"Body",     build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                    sdps:942.2,  bdps:1396.6,  notes:"" },
            { rank:25, weapon:"Experimental Lightning Gun",       type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Pressurizer","Quick-release Trigger"],                       sdps:784.2,  bdps:1443.8,  notes:"" },
            { rank:26, weapon:"Penetrator",                       type:"Body",     build:["Drillshot FK 7 Sprayer","Heavy Caliber Upgrade","Drillshot FK7 Optimizer"],                    sdps:710.8,  bdps:1396.6,  notes:"" },
            { rank:27, weapon:"Regis Burst Drillshot",            type:"Body",     build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                    sdps:692.6,  bdps:981.8,   notes:"" },
            { rank:28, weapon:"Plastanium Pyrocket",              type:"Body",     build:["Heavy Caliber Upgrade","Pyrocket Quickloader","Pyrocket Supercharger"],                        sdps:463.8,  bdps:1238.5,  notes:"" },
        ],
        headshot3: [
            { rank:1,  weapon:"Spitting Cobra",                   type:"Headshot", build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Personnel-Buster"],             sdps:6577.7, bdps:8419.5,  notes:"" },
            { rank:2,  weapon:"Regis Tripleshot Repeating Rifle", type:"Headshot", build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:5779.4, bdps:8102.7,  notes:"" },
            { rank:3,  weapon:"Way of the Misr",                  type:"Headshot", build:["Heavy Caliber Upgrade","Maula Pistol Antipersonnel Rounds","Maula Pistol Expander"],          sdps:5049.7, bdps:6155.6,  notes:"" },
            { rank:4,  weapon:"Blind Fury",                       type:"Headshot", build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:4853.7, bdps:5832.0,  notes:"" },
            { rank:5,  weapon:"The Angry Adder",                  type:"Headshot", build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Karpov 38 Precision Kit"],                      sdps:4293.2, bdps:5450.5,  notes:"" },
            { rank:6,  weapon:"Seethe",                           type:"Headshot", build:["Rafiq Snubnose Heavy Kit","Heavy Caliber Upgrade","Rafiq Snubnose Expander"],                 sdps:4233.7, bdps:6420.2,  notes:"" },
            { rank:7,  weapon:"Shishakli's Bite",                 type:"Headshot", build:["Heavy Caliber Upgrade","Maula Pistol Antipersonnel Rounds","Maula Pistol Expander"],          sdps:3930.2, bdps:5201.7,  notes:"" },
            { rank:8,  weapon:"Hell-Fury Pistol",                 type:"Headshot", build:["Rafiq Snubnose Heavy Kit","Heavy Caliber Upgrade","Tactical Enhancer"],                       sdps:3880.2, bdps:4966.6,  notes:"" },
            { rank:9,  weapon:"Seethe\u2074",                     type:"Headshot", build:["Rafiq Snubnose Heavy Kit","Heavy Caliber Upgrade","Tactical Enhancer"],                       sdps:3789.8, bdps:7704.3,  notes:"" },
            { rank:10, weapon:"Blind Fury\u2074",                 type:"Headshot", build:["Tactical Enhancer","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                       sdps:3700.2, bdps:5926.5,  notes:"" },
            { rank:11, weapon:"Black Market K-28 Lasgun",         type:"Headshot", build:["Heavy Caliber Upgrade","Lasgun Amplifier","Lasgun Harmonizer"],                               sdps:3621.4, bdps:9579.3,  notes:"" },
            { rank:12, weapon:"Dunewatcher",                      type:"Headshot", build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:3511.0, bdps:5020.4,  notes:"" },
            { rank:13, weapon:"Indara's Lullaby",                 type:"Headshot", build:["Heavy Caliber Upgrade","Karpov 38 Precision Kit","Quick-release Trigger"],                    sdps:1629.9, bdps:1829.0,  notes:"" },
            { rank:14, weapon:"Experimental Lightning Gun",       type:"Headshot", build:["Karpov 38 Precision Kit","Heavy Caliber Upgrade","Tactical Enhancer"],                        sdps:1478.7, bdps:2860.7,  notes:"" },
            { rank:15, weapon:"Ambition",                         type:"Headshot", build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                   sdps:1413.2, bdps:2095.0,  notes:"" },
            { rank:16, weapon:"Penetrator",                       type:"Headshot", build:["Drillshot FK 7 Sprayer","Heavy Caliber Upgrade","Drillshot FK7 Optimizer"],                   sdps:1066.2, bdps:2095.0,  notes:"" },
            { rank:17, weapon:"Regis Burst Drillshot",            type:"Headshot", build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                   sdps:1038.8, bdps:1472.7,  notes:"" },
        ],
        shield: [
            { rank:1,  weapon:"The Ancient Way",                  type:"Shield",   build:["Capacity Expander (50%)","Disruptive Coating","Missile Launcher Obliterator"],                sdps:139.5,  bdps:823.2,   notes:"Capacity Expander with max roll (50%) gives 2 shots. Sustained DPS doesn't factor in lock-on times." },
            { rank:2,  weapon:"Sardaukar Intimidator",            type:"Shield",   build:["Disruptor M11 Quickloader","Disruptive Coating","Disruptor M11 Sprayer"],                     sdps:582.4,  bdps:743.5,   notes:"" },
            { rank:3,  weapon:"A Dart for Every Man",             type:"Shield",   build:["Disruptor M11 Quickloader","Disruptive Coating","Disruptor M11 Sprayer"],                     sdps:608.6,  bdps:725.8,   notes:"Requires high FPS to fire at listed RPM." },
            { rank:4,  weapon:"Regis Disruptor Pistol",           type:"Shield",   build:["Disruptive Coating","Rafiq Snubnose Disruptive Coating","Rafiq Snubnose Expander"],           sdps:228.2,  bdps:711.2,   notes:"Burst uses single shot damage. Sustained factors in charge times and RPM." },
            { rank:5,  weapon:"Spitting Cobra",                   type:"Shield",   build:["Disruptor M11 Quickloader","Disruptive Coating","Disruptor M11 Sprayer"],                     sdps:545.4,  bdps:685.4,   notes:"Higher unshielded damage vs other SMGs. Requires high FPS to fire at listed RPM." },
            { rank:6,  weapon:"The Hateful Barker",               type:"Shield",   build:["VULCAN GAU-92 Disruptive Coating","VULCAN GAU-92 Expander","Quick-release Trigger"],          sdps:452.5,  bdps:551.5,   notes:"Swap VULCAN GAU-92 Expander for Disruptive Coating to get 630.3 Shield Burst DPS." },
            { rank:7,  weapon:"Bashar's Command",                 type:"Shield",   build:["VULCAN GAU-92 Disruptive Coating","VULCAN GAU-92 Expander","Quick-release Trigger"],          sdps:436.8,  bdps:551.5,   notes:"Swap VULCAN GAU-92 Expander for Disruptive Coating to get 630.3 Shield Burst DPS." },
            { rank:8,  weapon:"Plasma Cannon",                    type:"Shield",   build:["VULCAN GAU-92 Disruptive Coating","VULCAN GAU-92 Expander","Quick-release Trigger"],          sdps:393.0,  bdps:551.5,   notes:"Swap VULCAN GAU-92 Expander for Disruptive Coating to get 630.3 Shield Burst DPS." },
            { rank:9,  weapon:"Experimental Lightning Gun",       type:"Shield",   build:["Quick-release Trigger","Disruptive Coating","Karpov 38 Pressurizer"],                         sdps:228.6,  bdps:421.0,   notes:"" },
            { rank:10, weapon:"Hell-Fury Pistol",                 type:"Shield",   build:["Quick-release Trigger","Disruptive Coating","Rafiq Snubnose Disruptive Coating"],             sdps:182.0,  bdps:369.9,   notes:"" },
            { rank:11, weapon:"Way of the Misr",                  type:"Shield",   build:["Maula Pistol Disruptive Coating","Maula Pistol Expander","Disruptive Coating"],               sdps:289.3,  bdps:363.2,   notes:"" },
            { rank:12, weapon:"The Angry Adder",                  type:"Shield",   build:["Quick-release Trigger","Karpov 38 Precision Kit","Disruptive Coating"],                       sdps:264.5,  bdps:348.1,   notes:"" },
            { rank:13, weapon:"Salusan Vengeance",                type:"Shield",   build:["Quick-release Trigger","Karpov 38 Precision Kit","Disruptive Coating"],                       sdps:250.6,  bdps:348.0,   notes:"" },
            { rank:14, weapon:"Seethe",                           type:"Shield",   build:["Quick-release Trigger","Rafiq Snubnose Expander","Disruptive Coating"],                       sdps:164.6,  bdps:307.0,   notes:"" },
            { rank:15, weapon:"Shishakli's Bite",                 type:"Shield",   build:["Maula Pistol Disruptive Coating","Maula Pistol Expander","Maula Pistol Sprayer"],             sdps:142.3,  bdps:209.7,   notes:"" },
            { rank:16, weapon:"Regis Tripleshot Repeating Rifle", type:"Shield",   build:["Disruptive Coating","JABAL Spitdart Disruptive Coating","JABAL Spitdart Expander"],           sdps:125.2,  bdps:180.1,   notes:"" },
            { rank:17, weapon:"Dunewatcher",                      type:"Shield",   build:["Disruptive Coating","JABAL Spitdart Disruptive Coating","JABAL Spitdart Expander"],           sdps:109.8,  bdps:163.7,   notes:"" },
            { rank:18, weapon:"Blind Fury",                       type:"Shield",   build:["Disruptive Coating","JABAL Spitdart Disruptive Coating","JABAL Spitdart Expander"],           sdps:133.5,  bdps:163.4,   notes:"" },
            { rank:19, weapon:"Indara's Lullaby",                 type:"Shield",   build:["Disruptive Coating","Quick-release Trigger","Karpov 38 Dart Sprayer"],                        sdps:114.2,  bdps:149.2,   notes:"" },
            { rank:20, weapon:"Shellburster",                     type:"Shield",   build:["Quick-release Trigger","GRDA 44 Expander","Disruptive Coating"],                              sdps:123.7,  bdps:146.6,   notes:"" },
            { rank:21, weapon:"Perforator",                       type:"Shield",   build:["Quick-release Trigger","GRDA 44 Expander","Disruptive Coating"],                              sdps:96.8,   bdps:143.1,   notes:"" },
            { rank:22, weapon:"Plastanium Pyrocket",              type:"Shield",   build:["Pyrocket Decimator","Capacity Expander","Pyrocket Supercharger"],                             sdps:17.4,   bdps:59.5,    notes:"" },
            { rank:23, weapon:"Vaporizer",                        type:"Shield",   build:["Flamethrower Superheater","Flamethrower Amplifier","Flamethrower Superheater"],               sdps:38.1,   bdps:48.3,    notes:"" },
            { rank:24, weapon:"Glasser",                          type:"Shield",   build:["Flamethrower Superheater","Flamethrower Amplifier","Flamethrower Superheater"],               sdps:36.5,   bdps:48.3,    notes:"" },
        ],
        best3: [
            { rank:1,  weapon:"Perforator",                       type:"Body",     build:["Heavy Caliber Upgrade","GRDA 44 Amplifier","Scattergun Rampage-Enhancement"],                 sdps:4099.8, bdps:5931.9,  notes:"" },
            { rank:2,  weapon:"Hell-Fury Pistol",                 type:"Headshot", build:["Rafiq Snubnose Heavy Kit","Heavy Caliber Upgrade","Tactical Enhancer"],                       sdps:3880.2, bdps:4966.6,  notes:"Seethe's burst damage is much higher than Hell-Fury." },
            { rank:3,  weapon:"Regis Tripleshot Repeating Rifle", type:"Body",     build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:3852.9, bdps:5401.8,  notes:"" },
            { rank:4,  weapon:"Spitting Cobra",                   type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                    sdps:3811.7, bdps:4740.4,  notes:"" },
            { rank:5,  weapon:"Seethe",                           type:"Headshot", build:["Rafiq Snubnose Heavy Kit","Heavy Caliber Upgrade","Tactical Enhancer"],                       sdps:3789.8, bdps:7704.3,  notes:"Rafiq Snubnose Expander gives a bigger clip but can't maintain accuracy over full clip." },
            { rank:6,  weapon:"Shellburster",                     type:"Body",     build:["Heavy Caliber Upgrade","Scattergun Rampage-Enhancement","Quick-release Trigger"],             sdps:3531.4, bdps:4350.6,  notes:"Quick-release Trigger keeps DPS high without using a GRDA Amplifier." },
            { rank:7,  weapon:"Dunewatcher",                      type:"Headshot", build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:3511.0, bdps:5020.4,  notes:"Can't maintain accuracy for full clip. JABAL Spitdart Toxicity Amplifier is an alternative for PVP." },
            { rank:8,  weapon:"Plasma Cannon",                    type:"Body",     build:["VULCAN GAU-92 Expander","Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating"],          sdps:3348.4, bdps:3348.4,  notes:"" },
            { rank:9,  weapon:"Blind Fury",                       type:"Body",     build:["JABAL Spitdart Expander","Heavy Caliber Upgrade","JABAL Spitdart Amplifier"],                 sdps:3235.8, bdps:3888.0,  notes:"" },
            { rank:10, weapon:"The Hateful Barker",               type:"Body",     build:["VULCAN GAU-92 Expander","Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating"],          sdps:3131.8, bdps:3643.3,  notes:"Very inaccurate." },
            { rank:11, weapon:"Sardaukar Intimidator",            type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                    sdps:2872.5, bdps:3632.3,  notes:"See Shield Break rankings for shield damage build." },
            { rank:12, weapon:"A Dart for Every Man",             type:"Body",     build:["Heavy Caliber Upgrade","Disruptor M11 Sprayer","Disruptor M11 Heavy Kit"],                    sdps:2784.4, bdps:3293.2,  notes:"See Shield Break rankings for shield damage build." },
            { rank:13, weapon:"Way of the Misr",                  type:"Body",     build:["Heavy Caliber Upgrade","Maula Pistol Expander","Maula Pistol Antipersonnel Rounds"],          sdps:2524.9, bdps:3077.8,  notes:"" },
            { rank:14, weapon:"Bashar's Command",                 type:"Body",     build:["Heavy Caliber Upgrade","VULCAN GAU-92 Disruptive Coating","VULCAN GAU-92 Expander"],         sdps:2433.9, bdps:2911.0,  notes:"" },
            { rank:15, weapon:"Black Market K-28 Lasgun",         type:"Body",     build:["Heavy Caliber Upgrade","Lasgun Amplifier","Lasgun Harmonizer"],                               sdps:2414.3, bdps:6386.2,  notes:"" },
            { rank:16, weapon:"The Angry Adder",                  type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Karpov 38 Precision Kit"],                      sdps:2143.5, bdps:2721.3,  notes:"See Headshot Rankings for headshot damage. Can't maintain accuracy for full clip." },
            { rank:17, weapon:"Salusan Vengeance",                type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Karpov 38 Precision Kit"],                      sdps:1990.3, bdps:2656.2,  notes:"Can't headshot." },
            { rank:18, weapon:"Shishakli's Bite",                 type:"Body",     build:["Heavy Caliber Upgrade","Maula Pistol Expander","Maula Pistol Antipersonnel Rounds"],          sdps:1965.1, bdps:2600.9,  notes:"" },
            { rank:19, weapon:"The Ancient Way\u00B2",            type:"Body",     build:["Heavy Caliber Upgrade","Missile Launcher Fragmenter","Missile Launcher Heavy Payload"],       sdps:1366.2, bdps:5279.3,  notes:"See Shield Break Rankings for shield damage build. Requires 50% Capacity Expander." },
            { rank:20, weapon:"Vaporizer",                        type:"Body",     build:["Heavy Caliber Upgrade","Flamethrower Amplifier","Flamethrower Superheater"],                  sdps:1050.1, bdps:1291.7,  notes:"Metric doesn't factor in burn damage." },
            { rank:21, weapon:"Regis Disruptor Pistol",           type:"Body",     build:["Heavy Caliber Upgrade","Rafiq Snubnose Disruptive Coating","Rafiq Snubnose Expander"],       sdps:1048.2, bdps:1206.9,  notes:"See Shield Break rankings for shield damage build." },
            { rank:22, weapon:"Indara's Lullaby",                 type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Heavy Kit","Quick-release Trigger"],                        sdps:968.5,  bdps:1291.0,  notes:"" },
            { rank:23, weapon:"Glasser",                          type:"Body",     build:["Heavy Caliber Upgrade","Flamethrower Amplifier","Flamethrower Superheater"],                  sdps:956.4,  bdps:1202.0,  notes:"Metric doesn't factor in burn damage." },
            { rank:24, weapon:"Ambition",                         type:"Body",     build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                   sdps:942.2,  bdps:1396.6,  notes:"Deals \u00D71.5 damage through shields." },
            { rank:25, weapon:"Experimental Lightning Gun",       type:"Body",     build:["Heavy Caliber Upgrade","Karpov 38 Pressurizer","Quick-release Trigger"],                      sdps:784.2,  bdps:1443.8,  notes:"See Shield Break rankings for shield damage build. Body damage used in PVP." },
            { rank:26, weapon:"Penetrator",                       type:"Body",     build:["Drillshot FK 7 Sprayer","Heavy Caliber Upgrade","Drillshot FK7 Optimizer"],                   sdps:710.8,  bdps:1396.6,  notes:"Deals \u00D71.5 damage through shields. Cannot bleed through shields." },
            { rank:27, weapon:"Regis Burst Drillshot",            type:"Body",     build:["Heavy Caliber Upgrade","Drillshot FK 7 Sprayer","Drillshot FK7 Optimizer"],                   sdps:692.6,  bdps:981.8,   notes:"Deals \u00D71.5 damage through shields." },
            { rank:28, weapon:"Plastanium Pyrocket",              type:"Body",     build:["Heavy Caliber Upgrade","Pyrocket Quickloader","Pyrocket Supercharger"],                       sdps:463.8,  bdps:1238.5,  notes:"Metric doesn't factor in burn damage." },
        ]
    };

    const MM_AUG_LOCKED_TYPES = new Set(['headshot', 'shield']);

    function mmGetData() {
        if (!mmActiveDmg) return null;
        if (mmActiveAug !== '3') return null;
        if (mmActiveDmg === 'body')     return { rows: MM_DATA.body3,     label: 'Body Damage — 3 Augments' };
        if (mmActiveDmg === 'headshot') return { rows: MM_DATA.headshot3, label: 'Headshot — 3 Augments (100% Accuracy)' };
        if (mmActiveDmg === 'shield')   return { rows: MM_DATA.shield,    label: 'Shield Break — 3 Augments' };
        if (mmActiveDmg === 'best')     return { rows: MM_DATA.best3,     label: 'Overall Best — 3 Augments' };
        return null;
    }

    function mmDpsClass(val, maxVal) {
        if (maxVal === 0) return 'dps-low';
        const ratio = val / maxVal;
        if (ratio >= 0.70) return 'dps-high';
        if (ratio >= 0.35) return 'dps-mid';
        return 'dps-low';
    }

    function mmFmt(n) { return n.toFixed(1).replace(/\.0$/, ''); }

    function mmWeaponDisplay(name) {
        return name.replace(/([²³⁴⁵⁶⁷⁸⁹¹])/g, '<sup>$1</sup>');
    }

    function mmTypeClass(type) {
        const t = type.toLowerCase();
        if (t === 'body')     return 'mm-type-body';
        if (t === 'headshot') return 'mm-type-headshot';
        if (t === 'shield')   return 'mm-type-shield';
        return '';
    }

    function mmShowIdle() {
        document.getElementById('mmResults').innerHTML = `
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
                <p class="db-idle-text">Select a damage type to reveal the rankings.</p>
                <p class="db-idle-sub">Use augment slots to filter further</p>
            </div>`;
    }

    function mmUpdateAugButtons() {
        document.querySelectorAll('#mmGrpAug .f-btn').forEach(b => {
            if (b.dataset.aug !== '3') {
                b.classList.add('f-btn-disabled');
                b.classList.remove('active');
            } else {
                b.classList.remove('f-btn-disabled');
            }
        });
        if (mmActiveDmg && MM_AUG_LOCKED_TYPES.has(mmActiveDmg)) {
            mmActiveAug = '3';
            document.querySelectorAll('#mmGrpAug .f-btn').forEach(b => {
                b.classList.remove('active');
                if (b.dataset.aug === '3') b.classList.add('active');
            });
        }
    }

    function mmRender() {
        if (!mmActiveDmg) { mmShowIdle(); return; }
        mmUpdateAugButtons();

        if (mmActiveAug !== '3') {
            const augLabel = mmActiveAug === '2' ? '2 Augments' : '1 Augment';
            const dmgLabel = { body:'Body Damage', headshot:'Headshot', shield:'Shield Break', best:'Overall Best' }[mmActiveDmg] || '';
            document.getElementById('mmResults').innerHTML = `
                <div class="mm-result-bar">
                    <span class="mm-result-title">${dmgLabel} — ${augLabel}</span>
                    <span class="mm-result-count">0 entries</span>
                </div>
                <div class="mm-no-data">No ${augLabel} data available for this category.</div>`;
            return;
        }

        const dataset = mmGetData();
        if (!dataset) { mmShowIdle(); return; }

        const rows = dataset.rows;
        const hasNotes = rows.some(r => r.notes);
        const showType = (mmActiveDmg === 'best');
        const maxSdps = Math.max(...rows.map(r => r.sdps));
        const maxBdps = Math.max(...rows.map(r => r.bdps));

        const typeHeader  = showType  ? '<th>Type</th>'  : '';
        const notesHeader = hasNotes  ? '<th>Notes</th>' : '';

        const rowsHtml = rows.map(r => {
            const buildLines = r.build.map(a => `<span class="build-aug">\u00B7 ${a}</span>`).join('');
            const sdpsClass  = mmDpsClass(r.sdps, maxSdps);
            const bdpsClass  = mmDpsClass(r.bdps, maxBdps);
            const typeCell   = showType  ? `<td class="td-type ${mmTypeClass(r.type)}">${r.type}</td>` : '';
            const notesCell  = hasNotes  ? `<td class="td-notes">${r.notes || ''}</td>` : '';
            return `<tr>
                <td class="td-rank">${r.rank}</td>
                <td class="td-weapon">${mmWeaponDisplay(r.weapon)}</td>
                ${typeCell}
                <td class="td-build">${buildLines}</td>
                <td class="td-dps ${sdpsClass}">${mmFmt(r.sdps)}</td>
                <td class="td-dps ${bdpsClass}">${mmFmt(r.bdps)}</td>
                ${notesCell}
            </tr>`;
        }).join('');

        document.getElementById('mmResults').innerHTML = `
            <div class="mm-result-bar">
                <span class="mm-result-title">${dataset.label}</span>
                <span class="mm-result-count">${rows.length} weapons</span>
            </div>
            <div class="mm-table-wrap">
                <table>
                    <thead><tr>
                        <th class="th-num">Rank</th>
                        <th>Weapon</th>
                        ${typeHeader}
                        <th>Best Build</th>
                        <th class="th-num">Sustained DPS</th>
                        <th class="th-num">Burst DPS</th>
                        ${notesHeader}
                    </tr></thead>
                    <tbody>${rowsHtml}</tbody>
                </table>
            </div>`;
    }

    function mmSetDmg(btn) {
        const val = btn.dataset.dmg;
        if (mmActiveDmg === val) {
            mmActiveDmg = null;
            btn.classList.remove('active');
            mmActiveAug = '3';
            document.querySelectorAll('#mmGrpAug .f-btn').forEach(b => b.classList.remove('active'));
            mmUpdateAugButtons();
            mmShowIdle();
            return;
        }
        mmActiveDmg = val;
        document.querySelectorAll('#mmGrpDmg .f-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mmActiveAug = '3';
        document.querySelectorAll('#mmGrpAug .f-btn').forEach(b => b.classList.remove('active'));
        const aug3btn = document.querySelector('#mmGrpAug [data-aug="3"]');
        if (aug3btn) aug3btn.classList.add('active');
        mmRender();
    }

    function mmSetAug(btn) {
        if (btn.classList.contains('f-btn-disabled')) return;
        const val = btn.dataset.aug;
        if (mmActiveAug === val) {
            mmActiveAug = null;
            btn.classList.remove('active');
        } else {
            mmActiveAug = val;
            document.querySelectorAll('#mmGrpAug .f-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
        mmRender();
    }
