// ============ DATA ============
const zombies = [
    
    // Tier 1

    {
        name: "Zombie",
        tier: 1,
        description: "Le zombie le plus répandu dans les terres contaminées. Contrairement aux survivants, il suit un cycle inversé : il erre principalement la nuit et se terre dans les profondeurs ou les zones sombres durant la journée. De jour, il apparaît majoritairement dans les grottes et zones souterraines, tandis que la nuit, il envahit davantage la surface.\n\nIssu des premières vagues de l'infection, ce type de zombie constitue la base de l'évolution du fléau. Faible et désorganisé au départ, il s'adapte rapidement à son environnement et aux menaces. Ignoré ou sous-estimé, il devient en peu de temps une créature redoutable : plus rapide, plus résistante, et capable de se protéger avec des armures de plus en plus puissantes.\n\nDans un monde en ruine, ce n'est pas le plus dangereux… mais c'est toujours par lui que tout commence.",
        image: "./img/zombie.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 5, vitesse: 10, résistance: 6 },
        statsMax: { danger: 15, vitesse: 60, résistance: 100 },
        tags: ["Nocturne", "Commun", "Adaptive", "Armurable"],
        hp: "10 - 29  PV",
        spawn: "Partout",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Faible"
    },
    {
        name: "Zombie des Caves",
        tier: 1,
        description: "Mutation du zombie de départ, cette créature est le résultat d’une adaptation extrême à la vie souterraine. Isolé pendant de longues périodes dans l’obscurité totale, le virus a évolué différemment dans son organisme, modifiant son comportement et son apparence pour survivre dans cet environnement hostile." + 
        "\n\nNe se trouvant que dans les profondeurs des grottes, il a développé une peau anormalement pâle, presque livide, conséquence directe du manque total de lumière. Ses sens semblent également altérés, compensant l’obscurité par une détection plus agressive des présences." + 
        "\n\nÀ première vue lent et similaire aux autres infectés, il révèle sa véritable nature dès qu’il repère une proie. Lorsqu’il détecte une présence, il déclenche une charge brutale et soudaine, parcourant la distance en un instant pour infliger de lourds dégâts. Cette attaque imprévisible en fait un prédateur redoutable dans les espaces confinés." + 
        "\n\nDans l’obscurité totale, là où la lumière ne pénètre jamais, cette mutation est dans son élément… et vous, clairement pas.",
        image: "./img/cave_zombie.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 40, vitesse: 25, résistance: 10 },
        tags: ["Commun", "Souterrain", "Impulsif"],
        hp: "20  PV",
        spawn: "Sous-terrain",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Faible"
    },
    {
        name: "Zombie Crawler",
        tier: 1,
        description: "Mutation du zombie commun, le Zombie Crawler est une créature dont le corps a été ravagé par une nécrose avancée. La moitié inférieure de son corps a progressivement disparu, détruite par la décomposition des tissus et l’évolution du virus. Malgré cela, l’infection maintient encore suffisamment son organisme en état de fonctionner pour lui permettre de se déplacer."+
        "\n\nPrivé de ses jambes, il se traîne désormais sur ses bras et le haut de son corps. Les restes de sa peau et de ses tissus pendent encore de son corps en lambeaux, couverts de sang et de traces de nécrose. Cette apparence particulièrement dégradée témoigne de l’état avancé de l’infection."+
        "\n\nMalgré son état, le Zombie Crawler continue d’évoluer. Le virus cherche constamment à compenser les parties de son corps qu’il a perdues, renforçant progressivement ses muscles et ses membres supérieurs afin d’améliorer sa mobilité et sa capacité à poursuivre ses proies. Plus il évolue, plus il devient difficile à distancer."+
        "\n\nSa mobilité réduite l’empêche de poursuivre efficacement les proies rapides, mais il compense par sa capacité à se déplacer dans des endroits où les autres zombies auraient du mal à passer. Il peut notamment se faufiler sous certains obstacles et surgir de zones difficiles à surveiller."+
        "\n\nBien qu’il soit lent et fortement diminué physiquement, il ne faut jamais le sous-estimer. Dans l’obscurité ou lorsqu’il est dissimulé parmi les débris, il peut facilement passer inaperçu jusqu’à ce qu’il soit déjà trop proche."+
        "\n\nUn corps presque entièrement détruit… mais une infection qui refuse de mourir.",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 20, vitesse: 12, résistance: 10 },
        statsMax: { danger: 15, vitesse: 60, résistance: 100 },
        tags: ["Commun", "Adaptive"],
        hp: "16  PV",
        spawn: "Partout",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Faible"
    },

    // Tier 2
    {
        name: "Zombie Villageois",
        tier: 2,
        description: "Ancien paysan victime de l’infection, ce zombie erre désormais dans les villes abandonnées. Contrairement aux autres infectés, il ne semble pas affecté par le cycle jour/nuit et reste actif en permanence, hantant les bâtiments et les rues désertes sans relâche." + 
        "\n\nAvant l’infection, il était passif, inoffensif, vivant simplement de son travail et de ses échanges. Mais le virus a réveillé une part sombre en lui, une véritable bête. Ce qui était autrefois un être paisible est devenu une créature agressive, imprévisible et animée d’une rage constante." + 
        "\n\nAu début de l’épidémie, de nombreux paysans continuaient à se rendre en ville pour commercer ou choisissaient même de s’y installer. Certains étaient déjà infectés sans le savoir… et c’est ainsi que le virus s’est propagé rapidement dans les zones urbaines. Cette concentration d’infectés explique leur forte présence en ville aujourd’hui."+
        "\n\nParadoxalement, cela a aussi permis à une partie de la civilisation de survivre : les zones rurales, moins exposées au début, ont été relativement épargnées, laissant encore quelques poches de vie en dehors des grandes villes."+
        "\n\nMalgré son état, son corps conserve une certaine résistance : les anticorps développés durant sa vie semblent freiner l’évolution du virus. De ce fait, il n’évolue pas comme les autres zombies : il reste stable, prévisible… mais jamais inoffensif.",
        image: "./img/zombie_villager.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 50, vitesse: 30, résistance: 10 },
        tags: ["Commun", "Urbain"],
        hp: "30  PV",
        spawn: "Villes",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Modéré"
    },
    {
        name: "Zombie Policier",
        tier: 2,
        description: "Variante du zombie commun, le Zombie Policier est principalement présent dans les zones urbaines, où il était autrefois chargé de maintenir l’ordre. On le retrouve en grand nombre dans les villes en ruine, tandis qu’il devient bien plus rare en dehors, loin de son ancien environnement." + "\n\nAvant l’infection, il représentait l’autorité et la sécurité. Mais lorsque le virus s’est propagé, les forces de police ont été parmi les premières exposées, envoyées en première ligne pour contenir le chaos. Beaucoup ont été infectés en tentant de contrôler des foules ou d’évacuer des civils… sans jamais réussir à s’échapper." + 
        "\n\nSon comportement reste très proche de celui d’un zombie classique : il erre, traque et attaque sans réelle stratégie. Cependant, contrairement au zombie commun, il ne semble pas évoluer avec le temps. Le virus, combiné aux équipements qu’il portait — protections, gilets, substances chimiques résiduelles — a comme “figé” son état. Son organisme ne s’adapte plus, bloqué dans une forme stable mais efficace." + 
        "\n\nSon équipement joue également un rôle important : son uniforme renforcé et ses protections lui offrent une meilleure résistance aux dégâts, le rendant plus difficile à abattre malgré son absence d’évolution." + 
        "\n\nTrès présent dans les villes, le Zombie Policier représente une menace constante dans les zones urbaines. Ce qui était autrefois une figure de protection est devenu un danger… toujours en service, mais incapable de changer.",
        image: "./img/zombie_police.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 40, vitesse: 23, résistance: 40 },
        statsMax: { danger: 120, vitesse: 35, résistance: 40 },
        tags: ["Rare"],
        hp: "40 - 66 PV",
        spawn: "Villes",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Élevée"
    },
    {
        name: "Screamer",
        tier: 2,
        description: "Mutation du zombie commun, le Zombie Screamer est une créature dont le virus a altéré le système vocal de manière extrême. On le retrouve principalement dans les plaines, les déserts et les zones montagneuses, où sa capacité à attirer et faire surgir d’autres infectés le rend particulièrement dangereux en terrain ouvert." + "\n\nÀ première vue, il ressemble à un zombie classique, et son comportement reste en grande partie similaire : il attaque directement toute proie qu’il repère. Cependant, dès qu’il détecte une présence, il pousse un cri strident et anormalement puissant avant ou pendant l’engagement." + 
        "\n\nCe cri ne se contente pas d’alerter… il provoque une réaction immédiate du virus dans le sol environnant. Des zombies émergent alors directement de la terre, comme s’ils avaient été attirés ou réveillés par cette onde sonore. En quelques secondes, une simple rencontre peut se transformer en affrontement contre plusieurs ennemis." + 
        "\n\nCette mutation est particulièrement efficace dans les environnements ouverts comme les plaines ou les déserts, où le sol est instable et propice à l’émergence rapide d’infectés enfouis ou en dormance. Le virus semble utiliser le Screamer comme un déclencheur, activant d’autres hôtes à proximité." + 
        "\n\nCapable de combattre comme un zombie classique tout en invoquant des renforts, le Zombie Screamer représente une menace double. Le laisser vivre trop longtemps, c’est risquer de se retrouver submergé." + 
        "\n\nDans les étendues silencieuses, son cri ne passe jamais inaperçu… et le sol lui-même peut devenir votre pire ennemi.",
        image: "./img/screamer.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 25, vitesse: 25, résistance: 25 },
        statsMax: { danger: 85, vitesse: 25, résistance: 25 },
        tags: ["Rare"],
        hp: "60 - 87 PV",
        spawn: "Plaines/Deserts",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Élevée"
    },
    {
        name: "Claw Zombie",
        tier: 2,
        description: "Mutation avancée du zombie commun, le Claw Zombie est une créature qui s’est adaptée aux environnements naturels où la lumière se fait rare. On le retrouve dans les forêts, qu’elles soient denses ou modérées, ainsi que dans les jungles, où il est nettement plus fréquent. Dès que la luminosité diminue, il devient plus présent, utilisant les zones sombres comme terrain de chasse privilégié. Il apparaît d’ailleurs bien plus souvent la nuit, lorsque l’obscurité recouvre entièrement son territoire." + 
        "\n\nDans ces milieux, où la visibilité est réduite et les proies plus difficiles à surprendre, le virus a provoqué une mutation brutale. Sa mâchoire inférieure a complètement disparu, ne laissant visible que la partie supérieure de sa dentition. Privé de langue et incapable de mordre efficacement, son organisme a compensé autrement." + 
        "\n\nSes bras ont subi une transformation extrême : ses doigts se sont allongés, durcis et affûtés, formant de longues griffes tranchantes, comparables à celles de grands prédateurs. Cette évolution lui permet d’attaquer rapidement, de lacérer et d’immobiliser ses proies sans dépendre d’une morsure." + 
        "\n\nDans les jungles, cette mutation semble encore plus poussée. L’humidité, la densité de la végétation et l’obscurité quasi constante favorisent son développement, le rendant plus agressif, plus rapide et encore mieux adapté à la traque. C’est dans ces environnements qu’il atteint son niveau le plus dangereux." + 
        "\n\nSa présence accrue dans l’obscurité n’est pas un hasard. Le virus semble renforcer ses capacités lorsque la lumière est faible : ses sens deviennent plus aiguisés, son agressivité augmente et son comportement de chasse est amplifié. La nuit, ou dans les zones sombres, il atteint ainsi son plein potentiel, devenant beaucoup plus imprévisible." + 
        "\n\nTrès dangereux, le Claw Zombie incarne une mutation où l’infection abandonne les mécanismes humains pour adopter ceux d’un véritable prédateur. Là où la lumière disparaît, il devient une menace silencieuse… prête à frapper.",
        image: "./img/claw_zombie.png",
        // Danger : Dégats PV enlever au joueur * 5
        // Vitesse : au feeling ta capter
        // Résistance : Point d'armure * 5
        stats: { danger: 63, vitesse: 37, résistance: 10 },
        tags: ["Rare"],
        hp: "25 PV",
        spawn: "Forêts",
        // Tier 1 : Faible → Modéré | Tier 2 : Élevée → Très Élevée | Tier 3 Critique → Extrême | Tier 4 : Mortelle → Apocalyptique | Tier 5 : Dévastatrice → Apex
        threat: "Très Élevée"
    }

];

const TIER_COLORS = {
    1: '#7fff00',
    2: '#f39c12',
    3: '#e67e22',
    4: '#e74c3c',
    5: '#9b59b6'
};

const TIER_LABELS = {
    1: 'Tier 1 — Commun',
    2: 'Tier 2 — Dangereux',
    3: 'Tier 3 — Élite',
    4: 'Tier 4 — Boss',
    5: 'Tier 5 — Apex'
};


// ============ SURVIVANTS DATA ============
const survivants = [
    {
        name: "Vache",
        cat: "animal",
        statut: "ami",
        description: "Autrefois symbole de la vie paisible, la vache survit dans les prairies et plaines, souvent à l’abri des zones contaminées.\n\nElle fournit nourriture et cuir aux rares survivants qui osent s’aventurer hors des ruines.",
        image: "./img/cow.png",
        stats: { combat: 0, survie: 30, utilite: 80 },
        tags: ["Animal", "Prairie"],
        origine: "Rural",
        localisation: "Plains",
        alliance: "N/A"
    },
    {
        name: "Mouton",
        cat: "animal",
        statut: "ami",
        description: "Le mouton est devenu un refuge de laine dans un monde ravagé.\n\nFragile et craintif, certains troupeaux ont développé une alerte instinctive et se cachent dans des grottes ou sous des abris naturels.",
        image: "./img/sheep.png",
        stats: { combat: 0, survie: 25, utilite: 70 },
        tags: ["Animal", "Troupeau"],
        origine: "Rural",
        localisation: "Plains/Hills",
        alliance: "N/A"
    },
    {
        name: "Cochon",
        cat: "animal",
        statut: "ami",
        description: "Autrefois utilisé pour la nourriture, le cochon est devenu un animal téméraire et curieux dans ce monde ravagé.\n\nIl se déplace souvent en petits groupes pour survivre dans les ruines.",
        image: "./img/pig.png",
        stats: { combat: 0, survie: 35, utilite: 60 },
        tags: ["Animal", "Ferme"],
        origine: "Rural",
        localisation: "Plains/Forests",
        alliance: "N/A"
    },
    {
        name: "Poulet",
        cat: "animal",
        statut: "ami",
        description: "Le poulet survit dans les zones semi-urbaines et les ruines de fermes.\n\nTrès rapide et nerveux, il se disperse dès qu’il perçoit un danger, mais reste une source de nourriture fiable pour les survivants.",
        image: "./img/chicken.png",
        stats: { combat: 0, survie: 20, utilite: 50 },
        tags: ["Animal", "Fermier"],
        origine: "Rural",
        localisation: "Plains/Forest",
        alliance: "N/A"
    },
    {
        name: "Cheval",
        cat: "animal",
        statut: "ami",
        description: "Le cheval reste un compagnon précieux pour traverser les zones dangereuses.\n\nRapide et robuste, il permet de fuir les infectés ou rejoindre d’autres survivants. Les troupeaux sauvages sont vigilants et difficiles à approcher.",
        image: "./img/horse.png",
        stats: { combat: 0, survie: 50, utilite: 180 },
        tags: ["Animal", "Monture"],
        origine: "Rural",
        localisation: "Plains/Hills",
        alliance: "N/A"
    },
    {
        name: "Loup",
        cat: "animal",
        statut: "neutre",
        description: "Autrefois compagnon de l’homme, le loup chasse désormais en meutes et reste très territorial.\n\nCertaines meutes peuvent être apprivoisées par des survivants, devenant des alliés précieux dans ce monde hostile.",
        image: "./img/wolf.png",
        stats: { combat: 50, survie: 60, utilite: 140 },
        tags: ["Animal", "Prédateur"],
        origine: "Forêt",
        localisation: "Forest/Taiga",
        alliance: "Survivants"
    },


    {
        name: "Forces Libres",
        cat: "allie",
        statut: "ami",
        description: "Après l’effondrement des gouvernements et la propagation incontrôlable de l’infection, certains anciens militaires, mercenaires et survivants expérimentés se sont regroupés sans appartenir à aucune nation. Leur objectif est clair : contenir l’infection et protéger ce qu’il reste de l’humanité." + 
        "\n\nCes unités indépendantes opèrent principalement dans les zones à risque, traquant les infectés et sécurisant les secteurs encore récupérables. Contrairement aux autres forces armées, elles évitent autant que possible les affrontements avec les survivants, préférant observer, aider ou se retirer plutôt que d’engager le combat inutilement." + 
        "\n\nOrganisés mais flexibles, ils agissent avec une certaine éthique : identification des cibles, priorisation des menaces infectées, et interventions rapides pour limiter les pertes humaines. Leur équipement est souvent un mélange de matériel récupéré et militaire, et leur communication reste efficace malgré l’absence de commandement central." + 
        "\n\nCependant, leur présence ne passe pas inaperçue. Considérés comme une gêne ou une menace par les forces américaines et soviétiques, ils sont régulièrement impliqués dans des affrontements secondaires avec ces factions." + 
        "\n\nMalgré tout, ils sont connus pour offrir aide et protection à ceux qui croisent leur chemin, toujours prêts à intervenir pour soutenir ceux qui luttent pour survivre. Dans un monde où tout s’effondre, ils représentent l’un des derniers espoirs… mais même les “gentils” doivent parfois se battre pour survivre.",
        image: "./img/pmcunit.png",
        stats: { combat: 180, survie: 160, utilite: 185 },
        tags: ["Recruteable", "Garde", "Tactique", "Protection"],
        origine: "Urbaine",
        localisation: "Villes",
        alliance: "Ami"
    },
    {
        name: "Forces Américaines",
        cat: "hostile",
        statut: "hostile",
        description: "Suite à la propagation de l’infection, les États-Unis ont rapidement engagé leurs troupes sur le territoire contaminé. Ce qui devait être une opération de confinement a dégénéré lorsque les forces soviétiques ont fait de même, transformant la zone en un véritable champ de bataille où guerre et épidémie se confondent." + 
        "\n\nLes unités américaines encore actives continuent d’opérer dans les zones urbaines dévastées. Elles progressent en groupes structurés, inspectant, occupant ou nettoyant les secteurs qu’elles jugent stratégiques. Toute présence inconnue est immédiatement considérée comme hostile." + 
        "\n\nMême après l’effondrement global, ces soldats ont conservé leurs réflexes militaires : coordination, communication et efficacité sur le terrain. Leur manière d’agir est méthodique, presque automatique, comme s’ils poursuivaient une mission qui ne s’est jamais terminée. Leur accent et leur équipement permettent de les reconnaître… mais rarement à temps pour réagir." + 
        "\n\nDans ce territoire brisé, ils ne défendent plus une nation… ils poursuivent simplement une guerre devenue incontrôlable.",
        image: "./img/usunit.png",
        stats: { combat: 180, survie: 180, utilite: 10 },
        tags: ["Garde", "Tactique"],
        origine: "Urbaine",
        localisation: "Villes",
        alliance: "US"
    },
    {
        name: "Forces Soviétiques",
        cat: "hostile",
        statut: "hostile",
        description: "Après le début de l’infection, les tensions entre les États-Unis et l’Union soviétique ont rapidement dégénéré en un conflit ouvert sur le territoire contaminé. Chaque camp cherchait à prendre le contrôle des zones infectées, espérant exploiter le virus comme une arme… ou au moins empêcher l’ennemi d’en faire autant. Mais la guerre, combinée à l’épidémie, a plongé le monde dans un chaos total." + 
        "\n\nLes forces soviétiques encore présentes n’ont jamais quitté la zone. Retranchées, organisées et lourdement armées, elles opèrent désormais en escouades dans les villes en ruine, lançant des assauts réguliers pour sécuriser ou éliminer toute présence hostile. Pour elles, tout ce qui bouge est une menace potentielle." + 
        "\n\nContrairement aux infectés, ces soldats conservent une discipline militaire stricte, communiquent entre eux et utilisent des tactiques coordonnées, ce qui les rend extrêmement dangereux. Leur équipement usé et leur accent reconnaissable trahissent leur origine, même au milieu du chaos." + 
        "\n\nDans ce monde dévasté, ils ne sont pas là pour survivre… mais pour gagner une guerre qui n’a peut-être déjà plus de sens.",
        image: "./img/ruunit.png",
        stats: { combat: 180, survie: 180, utilite: 10 },
        tags: ["Garde", "Tactique"],
        origine: "Urbaine",
        localisation: "Villes",
        alliance: "RU"
    }
];

const CAT_COLORS = {
    humain:  '#5b9bd5',
    animal:  '#a8c060',
    allie:   '#4ab482',
    hostile: '#c0823a'
};

const CAT_LABELS = {
    humain: "Humain",  // Ami mais ne t'aide pas dans le combat
    animal:  'Animal',  // Un animal de la nature
    allie:   'Allié', // Un ami qui t'aide dans les combats
    hostile: 'Hostile' // Un hositle, qui attaque le joueur direct
};


// ============ MODS DATA ============
const modsRaw = `adaptive_performance_tweaks_1.20.1-11.6.1.jar
adaptive_performance_tweaks_core_1.20.1-11.6.1.jar
adaptive_performance_tweaks_gamerules_1.20.1-11.6.1.jar
adaptive_performance_tweaks_items_1.20.1-11.6.1.jar
adaptive_performance_tweaks_player_1.20.1-11.6.1.jar
adaptive_performance_tweaks_spawn_1.20.1-11.6.1.jar
alexsmobs-1.22.9.jar
appleskin-forge-mc1.20.1-2.5.1.jar
architectury-9.2.14-forge.jar
Atlas Lib-1.20.1-1.1.12.jar
BadMobs-1.20.1-19.0.4.jar
berezka_api-1.2.8.3-forge-1.20.1.jar
burnt-basic-1.9.4-forge-1.20.1.jar
carryon-forge-1.20.1-2.1.2.7.jar
chaoszpack v.1.4.0 TacZ.jar
chaoszpack_structures-1.0.2-1.20.1.jar
chaoszproject-bandits-1.0.0-1.20.1.jar
chloride-FORGE-mc1.20.1-v1.7.5.jar
chovys_apocalypse_mod-1.9.jar
citadel-2.6.3-1.20.1.jar
cloth-config-11.1.136-forge.jar
Clumps-forge-1.20.1-12.0.0.4.jar
comforts-forge-6.4.0+1.20.1.jar
Controlling-forge-1.20.1-12.0.2.jar
coroutil-forge-1.20.1-1.3.7.jar
corpse-forge-1.20.1-1.0.23.jar
create-1.20.1-6.0.8.jar
createaddition-1.20.1-1.3.3.jar
createdeco-2.0.3-1.20.1-forge.jar
cupboard-1.20.1-3.5.jar
distraction_free_recipes-forge-1.2.1-1.20.1.jar
doomsday_decoration-1.1.3-forge-1.20.1.jar
doomsday_translations-1.0.7.jar
DynamicTrees-1.20.1-1.4.10.jar
DynamicTreesPlus-1.20.1-1.2.2.jar
DynamicTreesTerralith-1.20.1-1.2.6.jar
embeddium-0.3.31+mc1.20.1.jar
emi-1.1.22+1.20.1+forge.jar
emiffect-forge-1.1.2+mc1.20.1.jar
emitrades-forge-1.2.1+mc1.20.1.jar
emi_create_schematics-1.0.4.jar
emi_enchanting-0.1.2+1.20.1+forge.jar
emi_loot-0.7.9+1.20.1+forge.jar
emi_ores-1.2+1.20.1+forge.jar
Explosion-Overhaul-0.2.3.0-forge-.jar
ExtraLib-2.1.4-1.20.1-Forge.jar
ExtraQuests-1.6.2-1.20.1-Forge.jar
fancymenu_forge_3.8.1_MC_1.20.1.jar
FarmersDelight-1.20.1-1.2.10.jar
ferritecore-6.0.1-forge.jar
framework-forge-1.20.1-0.8.0.jar
ftb-library-forge-2001.2.12.jar
ftb-quests-forge-2001.4.18.jar
ftb-teams-forge-2001.3.2.jar
fzzy_config-0.7.6+1.20.1+forge.jar
geckolib-forge-1.20.1-4.8.3.jar
GlitchCore-forge-1.20.1-0.0.1.1.jar
gundb-2.0.4-all.jar
horror_element_mod-1.6.3-forge-1.20.1.jar
ImmediatelyFast-Forge-1.5.4+1.20.4.jar
immersive_weathering-1.20.1-2.0.5-forge.jar
incontrol-1.20-9.4.6.jar
Infectious-forge-1.20.1-1.7.jar
Inventory Management Deluxe-1.20.1-Forge-1.0.3.jar
Jade-1.20.1-Forge-11.13.2.jar
jei-1.20.1-forge-15.20.0.112.jar.disabled
justenoughbreeding-forge-1.20-1.20.1-2.5.0.jar
Keerdm Zombie Apocalypse Essentials (TACZ) 1.42.jar
Kiwi-1.20.1-Forge-11.10.1.jar
konkrete_forge_1.8.0_MC_1.20-1.20.1.jar
kotlinforforge-4.12.0-all.jar
kubejs-create-forge-2001.3.0-build.8.jar
kubejs-forge-2001.6.5-build.16.jar
lc2h-3.3.0.jar
leawind_third_person-v2.2.0-mc1.20-1.20.1-forge.jar.disabled
legendarysurvivaloverhaul-1.20.1-2.4.2.jar
legendarytabs-1.20.1-1.1.3.1.jar
lootjs-forge-1.20.1-2.13.1.jar
lootr-forge-1.20-0.7.35.94.jar
lostcities-1.20-7.4.11.jar
Mantle-1.20.1-1.11.104.jar
melody_forge_1.0.3_MC_1.20.1-1.20.4.jar
MineTraps-1.20.2-(v.2.3.0a).jar
mobsunscreen-forge-1.20.1-3.1.1.jar
modernfix-forge-5.26.2+mc1.20.1.jar
moonlight-1.20-2.16.28-forge.jar
morejs-forge-1.20.1-0.10.1.jar
MouseTweaks-forge-mc1.20.1-2.25.1.jar
oculus-mc1.20.1-1.8.0.jar
out_of_sight-1.20.1-1.0.3.jar
PersistentCreativeInventory-0.0.2.jar
polymorph-forge-0.49.10+1.20.1.jar
probejs-6.0.1-forge.jar
quantified api-forge-1.20.1-1.3.0.jar
radium-mc1.20.1-0.12.4+git.26c9d8e.jar
recruits-1.20.1-1.14.2.3.jar.disabled
recruitswr-0.1173.jar.disabled
refinedstorage-1.12.4.jar
refurbished_furniture-forge-1.20.1-1.0.20.jar
rhino-forge-2001.2.3-build.10.jar
rubidium-extra-0.5.4.4+mc1.20.1-build.131.jar
Searchables-forge-1.20.1-1.0.3.jar
SereneSeasons-forge-1.20.1-9.1.0.2.jar
simpleenemymod-1.20.1-0.1.3-beta.jar
SmartBrainLib-forge-1.20.1-1.15.jar
smoothboot(reloaded)-mc1.20.1-0.0.4.jar
smoothchunk-1.20.1-4.1.jar
SnowRealMagic-1.20.1-Forge-10.7.0.jar
sophisticatedbackpacks-1.20.1-3.24.29.1588.jar
sophisticatedcore-1.20.1-1.3.8.1524.jar
StackableItems-forge-1.20.[0-1]-v1.1.jar
survival_instinct-1.0.2-forge-1.20.1.jar
tacticalmovement-1.0.0.jar
tacz-1.20.1-1.1.7-hotfix2.jar
taczjs-forge-1.4.0+mc1.20.1.jar
tacz_c-1.0.2-forge-1.20.1.jar
tacz_leawindtps_compat-1.1.0.jar.disabled
TConstruct-1.20.1-3.11.2.166.jar
tconstruct_js-1.0.5.jar
Terralith_1.20.x_v2.5.4.jar
The-Hordes-1.20.1-1.5.4c.jar
toomanyrecipeviewers-0.7.2+mc.20.1.jar
txnilib-forge-1.0.24-1.20.1.jar
Warium 1.2.7.jar.disabled
xaerominimap-forge-1.20.1-25.3.10.jar
xaeroworldmap-forge-1.20.1-1.40.11.jar
zombieawareness-1.20.1-1.13.1.jar
zombies_plus-2.1.2-1.20-.4(excl.3)-[forge-fabric].jar`;

function getModIcon() {
    return '🔧';
}

function parseMods() {
    return modsRaw.trim().split('\n').map(line => {
        const filename = line.trim();
        const disabled = filename.endsWith('.disabled');
        const clean = filename.replace('.disabled', '').replace('.jar', '');
        // Extract version
        const versionMatch = clean.match(/[-_](\d+\.\d+[\d.]*(?:[+-][^\s]+)?)\s*$/);
        const version = versionMatch ? versionMatch[1] : '';
        // Clean name
        let name = clean
            .replace(/-forge-.*/, '').replace(/-mc.*/, '').replace(/-\d+\.\d+.*/, '')
            .replace(/_/g, ' ').replace(/-/g, ' ').trim();
        name = name.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        return { name, filename, version, disabled, icon: getModIcon(filename) };
    });
}

const mods = parseMods();

// ============ NAVIGATION ============
function showPage(page) {
    // Hide all
    document.getElementById('page-home').classList.add('hidden');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Update nav
    document.querySelectorAll('.nav-links a').forEach(a => {
        a.classList.toggle('active', a.dataset.page === page);
    });

    if (page === 'home') {
        document.getElementById('page-home').classList.remove('hidden');
    } else {
        const el = document.getElementById('page-' + page);
        if (el) el.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// ============ DRIPS ANIMATION ============
function createDrips() {
    const container = document.getElementById('drips');
    if (!container) return;
    for (let i = 0; i < 12; i++) {
        const drip = document.createElement('div');
        drip.classList.add('drip');
        drip.style.left = Math.random() * 100 + '%';
        drip.style.animationDuration = (3 + Math.random() * 5) + 's';
        drip.style.animationDelay = (Math.random() * 6) + 's';
        drip.style.width = (1 + Math.random() * 2) + 'px';
        container.appendChild(drip);
    }
}

// ============ ZOMBIE RENDERING ============
function renderZombies(filter = 'all') {
    const grid = document.getElementById('zombieGrid');
    const filtered = filter === 'all' ? zombies : zombies.filter(z => z.tier === filter);
    grid.innerHTML = '';
    filtered.forEach((z, i) => {
        const color = TIER_COLORS[z.tier];
        const card = document.createElement('div');
        card.className = 'zombie-card';
        card.setAttribute('data-tier', z.tier);
        card.style.setProperty('--tier-color', color);
        card.style.animationDelay = (i * 0.05) + 's';

        const imgContent = z.image
            ? `<img src="${z.image}" alt="${z.name}" onerror="this.parentElement.innerHTML='<span class=\\'zombie-placeholder\\'>${z.emoji}</span>'">`
            : `<span class="zombie-placeholder">${z.emoji}</span>`;

        const dangerVal = z.stats.danger;
        const vitesseVal = z.stats.vitesse;
        const resVal = z.stats.résistance;

        const hasMax = !!z.statsMax;

        function statBar(val, maxRaw) {
            const overflow = Math.max(val - 100, 0);
            const bar1Fill = Math.min(val, 100);
            const ghostOnBar1 = hasMax ? `<div class="z-stat-ghost" style="width:${Math.min(maxRaw, 101)}%"></div>` : '';
            const ghostOnBar2 = hasMax && maxRaw > 100  ? `<div class="z-stat-ghost" style="width:${maxRaw - 100}%"></div>` : '';
            return `
                <div class="z-stat-bar">
                    ${ghostOnBar1}
                    <div class="z-stat-fill" style="width:${bar1Fill}%;background:${color}"></div>
                </div>
                <div class="z-stat-bar">
                    ${ghostOnBar2}
                    <div class="z-stat-fill" style="width:${overflow}%;background:${color}"></div>
                </div>`;
        }

        card.innerHTML = `
            <div class="zombie-card-inner">
                <div class="zombie-img-wrap">${imgContent}</div>
                <div class="zombie-content">
                    <div class="zombie-tier-badge" style="color:${color}">${TIER_LABELS[z.tier]}</div>
                    <h3>${z.name}</h3>
                    <p>${z.description.split('\n')[0].substring(0, 100)}…</p>
                    <div class="zombie-stats-row">
                        <div class="z-stat">
                            <div class="z-stat-label">Danger</div>
                            ${statBar(dangerVal, hasMax ? z.statsMax.danger : 0)}
                        </div>
                        <div class="z-stat">
                            <div class="z-stat-label">Vitesse</div>
                            ${statBar(vitesseVal, hasMax ? z.statsMax.vitesse : 0)}
                        </div>
                        <div class="z-stat">
                            <div class="z-stat-label">Résistance</div>
                            ${statBar(resVal, hasMax ? z.statsMax.résistance : 0)}
                        </div>
                    </div>
                    ${hasMax ? `<div class="z-evolve-hint">⬆ Évolution possible</div>` : ''}
                </div>
            </div>`;

        card.addEventListener('click', () => openModal(z));
        grid.appendChild(card);
    });
}

function filterZombies(tier, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderZombies(tier === 'all' ? 'all' : parseInt(tier));
}

function filterZombies(tier, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderZombies(tier === 'all' ? 'all' : parseInt(tier));
}

// ============ MODAL ============
function openModal(z) {
    const color = TIER_COLORS[z.tier];
    const modal = document.getElementById('zombieModal');
    modal.style.setProperty('--tier-color-modal', color);

    document.getElementById('modalTier').textContent = TIER_LABELS[z.tier];
    document.getElementById('modalTier').style.color = color;
    document.getElementById('modalName').textContent = z.name;

    const dangerVal = z.stats.danger;
    const vitesseVal = z.stats.vitesse;
    const resVal = z.stats.résistance;

    const imgWrap = document.getElementById('modalImg');
    imgWrap.innerHTML = z.image
        ? `<img src="${z.image}" alt="${z.name}" onerror="this.parentElement.innerHTML='<span class=\\'zombie-placeholder\\'>${z.emoji}</span>'">`
        : `<span class="zombie-placeholder">${z.emoji}</span>`;

    document.getElementById('modalDesc').innerHTML = z.description.replace(/\n\n/g, '</p><p>');

    document.getElementById('modalStats').innerHTML = `
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${z.hp}</div><div class="modal-stat-label">Points de vie</div></div>
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${z.spawn.split(' ')[0]}</div><div class="modal-stat-label">Spawn</div></div>
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${z.threat}</div><div class="modal-stat-label">Menace</div></div>
    `;

    document.getElementById('modalTags').innerHTML = z.tags.map(t =>
        `<span class="modal-tag">${t}</span>`
    ).join('');

    
    // Helper : applique val + ghost sur les 2 barres d'une stat du modal
    function setModalStat(id1, id2, bar1Id, bar2Id, val, maxRaw) {
        const overflow = Math.max(val - 100, 0);
        const bar1Fill = Math.min(val, 100);

        document.getElementById(id1).style = `width:${bar1Fill}%; background:${color}`;
        document.getElementById(id2).style = `width:${overflow}%; background:${color}`;

        // Reset ghosts
        [bar1Id, bar2Id].forEach(bid => {
            const bar = document.getElementById(bid);
            const g = bar.querySelector('.modal-z-stat-ghost');
            if (g) g.remove();
        });

        if (maxRaw > 0) {
            const ghost = document.createElement('div');
            ghost.className = 'modal-z-stat-ghost';
            
            ghost.style.width = maxRaw + '%';
            document.getElementById(bar1Id).insertBefore(ghost, document.getElementById(bar1Id).firstChild);
            
            if (maxRaw > 100) {
                const ghost2 = document.createElement('div');
                ghost2.className = 'modal-z-stat-ghost';
                
                ghost2.style.width = (maxRaw - 100) + '%';
                document.getElementById(bar2Id).insertBefore(ghost2, document.getElementById(bar2Id).firstChild);
            } 
        }
    }

    const maxD = z.statsMax ? z.statsMax.danger     : 0;
    const maxV = z.statsMax ? z.statsMax.vitesse     : 0;
    const maxR = z.statsMax ? z.statsMax.résistance  : 0;

    setModalStat('stat_danger',    'stat_danger2',    'bar1_danger',    'bar2_danger',    dangerVal,  maxD);
    setModalStat('stat_speed',     'stat_speed2',     'bar1_speed',     'bar2_speed',     vitesseVal, maxV);
    setModalStat('stat_toughness', 'stat_toughness2', 'bar1_toughness', 'bar2_toughness', resVal,     maxR);

    // Badge évolution
    let badge = document.getElementById('modalEvolveBadge');
    if (!badge) {
        badge = document.createElement('div');
        badge.id = 'modalEvolveBadge';
        badge.className = 'modal-evolve-badge';
        document.querySelector('.modal-zombie-stat').appendChild(badge);
    }
    if (z.statsMax) {
        badge.innerHTML = `<span class="modal-evolve-icon">⬆</span> Peut évoluer — barre fantôme = stats max`;
        badge.style.display = '';
    } else {
        badge.style.display = 'none';
    }


    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModalBtn();
}

function closeModalBtn() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}


// ============ SURVIVANTS RENDERING ============
function renderSurvivants(filter = 'all') {
    const grid = document.getElementById('survivantGrid');
    const filtered = filter === 'all' ? survivants : survivants.filter(s => s.cat === filter);
    grid.innerHTML = '';
    filtered.forEach((s, i) => {
        const color = CAT_COLORS[s.cat];
        const card = document.createElement('div');
        card.className = 'surv-card';
        card.setAttribute('data-cat', s.cat);
        card.style.setProperty('--surv-color', color);
        card.style.animationDelay = (i * 0.05) + 's';

        const imgContent = s.image
            ? `<img src="${s.image}" alt="${s.name}" onerror="this.parentElement.innerHTML='<span class=\\'surv-placeholder\\'>?</span>'">`
            : `<span class="surv-placeholder">${s.emoji}</span>`;

        const statutDotClass = s.statut === 'ami' ? 'ami' : s.statut === 'hostile' ? 'hostile' : 'neutre';
        const statutLabel = s.statut === 'ami' ? 'Ami' : s.statut === 'hostile' ? 'Hostile' : 'Neutre';

        card.innerHTML = `
            <div class="surv-card-inner">
                <div class="surv-img-wrap">${imgContent}</div>
                <div class="surv-content">
                    <div class="surv-cat-badge" style="color:${color}"><span class="surv-status-dot ${statutDotClass}"></span>${statutLabel} - ${s.cat}</div>
                    <h3>${s.name}</h3>
                    <p>${s.description.split('\n')[0].substring(0, 110)}…</p>
                    <div class="surv-stats-row">
                        <div class="z-stat">
                            <div class="z-stat-label">Combat</div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${s.stats.combat}%;background:${color}"></div></div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${Math.max(s.stats.combat - 100, 0)}%;background:${color}"></div></div>
                        </div>
                        <div class="z-stat">
                            <div class="z-stat-label">Survie</div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${s.stats.survie}%;background:${color}"></div></div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${Math.max(s.stats.survie - 100, 0)}%;background:${color}"></div></div>
                        </div>
                        <div class="z-stat">
                            <div class="z-stat-label">Utilité</div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${s.stats.utilite}%;background:${color}"></div></div>
                            <div class="z-stat-bar"><div class="z-stat-fill" style="width:${Math.max(s.stats.utilite - 100, 0)}%;background:${color}"></div></div>
                        </div>
                    </div>
                </div>
            </div>`;

        card.addEventListener('click', () => openSurvModal(s));
        grid.appendChild(card);
    });
}

function filterSurvivants(cat, btn) {
    document.querySelectorAll('.surv-filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderSurvivants(cat);
}

function openSurvModal(s) {
    const color = CAT_COLORS[s.cat];
    const modal = document.getElementById('survivantModal');
    modal.style.setProperty('--surv-modal-color', color);

    document.getElementById('survModalCat').textContent = CAT_LABELS[s.cat];
    document.getElementById('survModalCat').style.color = color;
    document.getElementById('survModalName').textContent = s.name;

    const imgWrap = document.getElementById('survModalImg');
    imgWrap.innerHTML = s.image
        ? `<img src="${s.image}" alt="${s.name}" onerror="this.parentElement.innerHTML='<span class=\\'surv-placeholder\\'>${s.emoji}</span>'">`
        : `<span class="surv-placeholder">${s.emoji}</span>`;

    document.getElementById('survModalDesc').innerHTML = s.description.replace(/\n\n/g, '</p><p>');

    const statutDotClass = s.statut === 'ami' ? 'ami' : s.statut === 'hostile' ? 'hostile' : 'neutre';
    document.getElementById('survModalStats').innerHTML = `
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${s.alliance}</div><div class="modal-stat-label">Alliance</div></div>
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${s.localisation.split(' ')[0]}</div><div class="modal-stat-label">Localisation</div></div>
        <div class="modal-stat"><div class="modal-stat-val" style="color:${color}">${s.origine.replace('Mod: ','')}</div><div class="modal-stat-label">Origine</div></div>
    `;

    document.getElementById('survModalTags').innerHTML = s.tags.map(t =>
        `<span class="modal-tag">${t}</span>`
    ).join('');

    document.getElementById('survModalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeSurvModal(e) {
    if (e.target === document.getElementById('survModalOverlay')) closeSurvModalBtn();
}

function closeSurvModalBtn() {
    document.getElementById('survModalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}


// ============ MODS RENDERING ============
function renderMods() {
    const grid = document.getElementById('modsGrid');
    const count = document.getElementById('modsCount');
    const enabledCount = mods.filter(m => !m.disabled).length;
    count.textContent = `${enabledCount} actifs / ${mods.length} total`;
    document.getElementById('mod-count-hero').textContent = enabledCount;
    grid.innerHTML = '';
    mods.forEach(mod => {
        const card = document.createElement('div');
        card.className = 'mod-card';
        card.setAttribute('data-name', mod.name.toLowerCase() + ' ' + mod.filename.toLowerCase());
        card.innerHTML = `
            <div class="mod-icon">${mod.icon}</div>
            <div class="mod-info">
                <div class="mod-name">${mod.name}</div>
                <div class="mod-version">${mod.version || '?'}</div>
            </div>
            <div class="mod-status ${mod.disabled ? 'disabled' : 'enabled'}" title="${mod.disabled ? 'Désactivé' : 'Actif'}"></div>
        `;
        grid.appendChild(card);
    });
}

function filterMods() {
    const q = document.getElementById('modSearch').value.toLowerCase();
    let visible = 0;
    document.querySelectorAll('.mod-card').forEach(card => {
        const match = card.dataset.name.includes(q);
        card.style.display = match ? '' : 'none';
        if (match) visible++;
    });
    document.getElementById('modsCount').textContent = `${visible} résultats`;
}

// ============ KEYBOARD CLOSE ============
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalBtn();
});

// ============ INIT ============
createDrips();
renderZombies();
renderMods();
renderSurvivants();