// Lesson content for the FSP Trainer.
// Each lesson belongs to one of the three FSP exam parts:
//   anamnese      -> Anamnesegespräch (doctor-patient history taking)
//   arztbrief     -> schriftlicher Arztbrief (written case report)
//   fachgespraech -> Fachgespräch (doctor-doctor case discussion)
//
// Exercise types supported by app.js:
//   'mc'    multiple choice   { question, options[], answerIndex, explanation }
//   'fill'  fill in the blank { text (contains ___), answer, explanation, hint? }
//   'vocab' flashcard         { term, definition, example? }

const LESSONS = [
  // ---------------------------------------------------------------------
  // PART 1: ANAMNESEGESPRÄCH
  // ---------------------------------------------------------------------
  {
    id: "an-brustschmerz",
    part: "anamnese",
    topic: "Kardiologie",
    title: "Brustschmerz",
    description: "Zentrale Fragen und Vokabular zur Anamnese bei akutem Brustschmerz.",
    exercises: [
      {
        type: "mc",
        question: "Wie fragen Sie am besten nach dem Beginn der Schmerzen?",
        options: [
          "Seit wann haben Sie die Schmerzen?",
          "Warum haben Sie Schmerzen?",
          "Haben Sie oft Schmerzen?",
          "Wo wohnen Sie?"
        ],
        answerIndex: 0,
        explanation: "„Seit wann...?" erfragt den zeitlichen Beginn der Beschwerden – ein zentraler Bestandteil der Anamnese."
      },
      {
        type: "vocab",
        term: "die Ausstrahlung",
        definition: "radiation (of pain) — e.g. pain spreading to the arm or jaw",
        example: "Strahlen die Schmerzen in den linken Arm oder in den Kiefer aus?"
      },
      {
        type: "fill",
        text: "Ist der Schmerz ___ (dumpf, drückend) oder eher ___ (stechend, scharf)?",
        answer: "dumpf, drückend",
        explanation: "Bei Verdacht auf ACS wird der Schmerzcharakter typischerweise als dumpf/drückend beschrieben, im Gegensatz zu stechendem Schmerz (eher muskuloskelettal).",
        hint: "Denken Sie an die Beschreibung eines Angina-pectoris-Schmerzes."
      },
      {
        type: "mc",
        question: "Welche Frage prüft eine mögliche kardiale Risikofaktoren-Anamnese?",
        options: [
          "Rauchen Sie? Haben Sie Diabetes, Bluthochdruck oder erhöhte Cholesterinwerte?",
          "Welche Hobbys haben Sie?",
          "Sind Sie verheiratet?",
          "Was haben Sie heute gegessen?"
        ],
        answerIndex: 0,
        explanation: "Rauchen, Diabetes, Hypertonie und Hyperlipidämie sind klassische kardiovaskuläre Risikofaktoren, die gezielt erfragt werden müssen."
      },
      {
        type: "vocab",
        term: "belastungsabhängig",
        definition: "exertion-dependent / triggered by physical exertion",
        example: "Treten die Schmerzen belastungsabhängig oder auch in Ruhe auf?"
      },
      {
        type: "fill",
        text: "Haben Sie zusätzlich zu den Schmerzen auch ___ (Luftnot) oder ___ (Schweißausbruch) bemerkt?",
        answer: "Luftnot, Schweißausbruch",
        explanation: "Begleitsymptome wie Dyspnoe und Diaphorese erhöhen den Verdacht auf ein akutes Koronarsyndrom und müssen aktiv erfragt werden."
      },
      {
        type: "mc",
        question: "Der Patient sagt: „Es fühlt sich an, als würde jemand auf meiner Brust sitzen.“ Wie fassen Sie das medizinisch zusammen?",
        options: [
          "Thorakales Druckgefühl / Engegefühl",
          "Stechender Schmerz im Rücken",
          "Kribbeln in den Fingern",
          "Schwindel beim Aufstehen"
        ],
        answerIndex: 0,
        explanation: "Ein beschriebenes „Druck- oder Engegefühl“ auf der Brust ist die klassische Umschreibung für Angina-pectoris-artige Beschwerden."
      }
    ]
  },
  {
    id: "an-bauchschmerz",
    part: "anamnese",
    topic: "Gastroenterologie",
    title: "Bauchschmerzen",
    description: "Anamnese des akuten und chronischen Bauchschmerzes.",
    exercises: [
      {
        type: "mc",
        question: "Welche Frage klärt die Lokalisation des Schmerzes am genauesten?",
        options: [
          "Können Sie mit einem Finger auf die Stelle zeigen, wo es am meisten schmerzt?",
          "Haben Sie Fieber?",
          "Was haben Sie gefrühstückt?",
          "Nehmen Sie Medikamente?"
        ],
        answerIndex: 0,
        explanation: "Die genaue Lokalisation (z. B. rechter Unterbauch bei Appendizitis) ist diagnostisch entscheidend."
      },
      {
        type: "vocab",
        term: "die Übelkeit",
        definition: "nausea",
        example: "Haben Sie Übelkeit oder mussten Sie sich erbrechen?"
      },
      {
        type: "fill",
        text: "Ist der Stuhlgang ___ (regelmäßig) oder haben Sie eine Veränderung bemerkt, z. B. ___ (Durchfall oder Verstopfung)?",
        answer: "regelmäßig, Durchfall oder Verstopfung",
        explanation: "Veränderungen der Stuhlgewohnheiten sind ein wichtiger Baustein der gastroenterologischen Anamnese."
      },
      {
        type: "mc",
        question: "Wie fragen Sie höflich, ob eine Schwangerschaft bei einer Patientin im gebärfähigen Alter ausgeschlossen werden kann?",
        options: [
          "Besteht die Möglichkeit, dass Sie schwanger sind?",
          "Sind Sie verheiratet?",
          "Wie alt sind Sie?",
          "Haben Sie Kinder?"
        ],
        answerIndex: 0,
        explanation: "Bei Unterbauchschmerzen muss bei Frauen im gebärfähigen Alter immer eine Schwangerschaft (z. B. Extrauteringravidität) ausgeschlossen werden."
      },
      {
        type: "vocab",
        term: "der Druckschmerz",
        definition: "tenderness to palpation",
        example: "Besteht ein Druckschmerz im rechten Unterbauch (McBurney-Punkt)?"
      },
      {
        type: "fill",
        text: "Verstärkt sich der Schmerz beim ___ (Loslassen) der Bauchdecke?",
        answer: "Loslassen",
        explanation: "Der „Loslassschmerz" (rebound tenderness) ist ein klassisches Peritonismus-Zeichen, z. B. bei Appendizitis."
      },
      {
        type: "mc",
        question: "Welche Frage gehört zur Ernährungs- und Genussmittelanamnese bei Oberbauchschmerz?",
        options: [
          "Trinken Sie Alkohol, und wenn ja, wie viel?",
          "Sind Sie sportlich aktiv?",
          "Haben Sie Haustiere?",
          "Reisen Sie oft?"
        ],
        answerIndex: 0,
        explanation: "Alkoholkonsum ist bei V. a. Pankreatitis oder Gastritis eine zentrale anamnestische Frage."
      }
    ]
  },
  {
    id: "an-diabetes",
    part: "anamnese",
    topic: "Endokrinologie",
    title: "Diabetes mellitus",
    description: "Anamnese bei chronischen Erkrankungen am Beispiel Diabetes.",
    exercises: [
      {
        type: "mc",
        question: "Wie erfragen Sie die Erstdiagnose einer chronischen Erkrankung?",
        options: [
          "Seit wann ist bei Ihnen der Diabetes bekannt?",
          "Haben Sie Geschwister?",
          "Was ist Ihr Beruf?",
          "Sind Sie Raucher?"
        ],
        answerIndex: 0,
        explanation: "Der Zeitpunkt der Erstdiagnose ist essenziell, um Krankheitsdauer und Folgeschäden einzuschätzen."
      },
      {
        type: "vocab",
        term: "die Unterzuckerung",
        definition: "hypoglycemia",
        example: "Hatten Sie schon einmal eine Unterzuckerung mit Schwitzen oder Zittern?"
      },
      {
        type: "fill",
        text: "Kontrollieren Sie Ihren Blutzucker ___ (regelmäßig) und wie hoch sind Ihre Werte meistens?",
        answer: "regelmäßig",
        explanation: "Selbstmessung und übliche Blutzuckerwerte geben Auskunft über die Stoffwechseleinstellung."
      },
      {
        type: "mc",
        question: "Welche Frage zielt auf diabetische Folgeerkrankungen ab?",
        options: [
          "Haben Sie Taubheitsgefühle oder Kribbeln in den Füßen bemerkt?",
          "Haben Sie Kopfschmerzen?",
          "Schlafen Sie gut?",
          "Sind Sie oft im Urlaub?"
        ],
        answerIndex: 0,
        explanation: "Taubheitsgefühle in den Füßen deuten auf eine diabetische Polyneuropathie hin – eine typische Folgeerkrankung."
      },
      {
        type: "vocab",
        term: "die Medikamentencompliance",
        definition: "medication adherence / compliance",
        example: "Nehmen Sie Ihre Medikamente regelmäßig wie verordnet ein?"
      },
      {
        type: "fill",
        text: "Gibt es in Ihrer Familie weitere Fälle von ___ (Diabetes) oder anderen Stoffwechselerkrankungen?",
        answer: "Diabetes",
        explanation: "Die Familienanamnese ist bei Diabetes mellitus Typ 2 besonders relevant, da eine genetische Komponente besteht."
      },
      {
        type: "mc",
        question: "Wie fragen Sie nach der Sehkraft im Rahmen der Anamnese?",
        options: [
          "Haben Sie in letzter Zeit eine Verschlechterung Ihres Sehvermögens bemerkt?",
          "Tragen Sie gerne bunte Kleidung?",
          "Wie oft gehen Sie einkaufen?",
          "Haben Sie ein Auto?"
        ],
        answerIndex: 0,
        explanation: "Sehverschlechterung kann auf eine diabetische Retinopathie hinweisen und sollte aktiv erfragt werden."
      }
    ]
  },

  // ---------------------------------------------------------------------
  // PART 2: SCHRIFTLICHER ARZTBRIEF
  // ---------------------------------------------------------------------
  {
    id: "ab-anamnese-abschnitt",
    part: "arztbrief",
    topic: "Aufbau",
    title: "Anamnese-Abschnitt schreiben",
    description: "Standardformulierungen für den Anamneseteil des Arztbriefs.",
    exercises: [
      {
        type: "fill",
        text: "Der Patient stellte sich mit seit zwei Tagen bestehenden ___ (Schmerzen) im rechten Unterbauch vor.",
        answer: "Schmerzen",
        explanation: "Klassischer Einleitungssatz: Patient + Zeitangabe + Leitsymptom + Lokalisation."
      },
      {
        type: "mc",
        question: "Welcher Satz ist eine korrekte, formelle Einleitung des Anamneseabschnitts?",
        options: [
          "Der Patient berichtet über seit drei Tagen bestehende retrosternale Schmerzen.",
          "Der Patient hat Schmerzen und ist gekommen.",
          "Er tut sich weh in der Brust.",
          "Schmerzen, Brust, drei Tage."
        ],
        answerIndex: 0,
        explanation: "Im Arztbrief wird die indirekte, formelle Formulierung „Der Patient berichtet über..." verwendet."
      },
      {
        type: "vocab",
        term: "anamnestisch bekannt",
        definition: "known from the (patient's) history — standard phrase to introduce pre-existing conditions",
        example: "Anamnestisch ist ein arterieller Hypertonus bekannt."
      },
      {
        type: "fill",
        text: "An Vorerkrankungen sind ein arterieller Hypertonus sowie ein Diabetes mellitus Typ 2 ___ (bekannt).",
        answer: "bekannt",
        explanation: "Standardformulierung zur Auflistung von Vorerkrankungen im Arztbrief."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie das Fehlen von Allergien korrekt?",
        options: [
          "Allergien sind nicht bekannt.",
          "Der Patient mag keine Allergien.",
          "Keine Allergie, nie gehabt.",
          "Allergiefrei laut Patient, glaube ich."
        ],
        answerIndex: 0,
        explanation: "„Allergien sind nicht bekannt" ist die im Arztbrief übliche, neutrale Standardformulierung."
      },
      {
        type: "vocab",
        term: "die Sozialanamnese",
        definition: "social history (living situation, occupation, substance use)",
        example: "In der Sozialanamnese zeigt sich ein gelegentlicher Nikotinkonsum von 5 Zigaretten pro Tag."
      },
      {
        type: "fill",
        text: "Die Medikamentenanamnese ergab die regelmäßige Einnahme von Metformin und ___ (Ramipril).",
        answer: "Ramipril",
        explanation: "Der Medikamentenabschnitt listet alle regelmäßig eingenommenen Präparate mit Wirkstoffnamen auf."
      }
    ]
  },
  {
    id: "ab-formulierungen",
    part: "arztbrief",
    topic: "Sprachbausteine",
    title: "Standard-Formulierungen",
    description: "Feste Redewendungen, die im Arztbrief immer wieder vorkommen.",
    exercises: [
      {
        type: "vocab",
        term: "im Wesentlichen unauffällig",
        definition: "essentially unremarkable — standard phrase for a normal exam finding",
        example: "Die körperliche Untersuchung war im Wesentlichen unauffällig."
      },
      {
        type: "mc",
        question: "Welche Formulierung leitet den Untersuchungsbefund korrekt ein?",
        options: [
          "Bei der körperlichen Untersuchung zeigte sich...",
          "Ich habe ihn untersucht und...",
          "Er sah so aus...",
          "Untersuchung: normal."
        ],
        answerIndex: 0,
        explanation: "„Bei der körperlichen Untersuchung zeigte sich..." ist die Standardformel zur Einleitung des Untersuchungsbefundes."
      },
      {
        type: "fill",
        text: "Laborchemisch zeigten sich erhöhte Entzündungsparameter mit einem CRP von 80 mg/l bei ___ (Leukozytose).",
        answer: "Leukozytose",
        explanation: "Laborwerte werden im Arztbrief mit konkreten Zahlen und dem passenden Fachbegriff beschrieben."
      },
      {
        type: "vocab",
        term: "zusammenfassend",
        definition: "in summary — used to open the closing assessment paragraph",
        example: "Zusammenfassend gehen wir von einer akuten Appendizitis aus."
      },
      {
        type: "mc",
        question: "Wie leiten Sie eine empfohlene Therapie im Arztbrief ein?",
        options: [
          "Wir empfehlen eine operative Therapie im Sinne einer Appendektomie.",
          "Er sollte operiert werden, glaube ich.",
          "Operation ist gut für ihn.",
          "Vielleicht Operation?"
        ],
        answerIndex: 0,
        explanation: "„Wir empfehlen..." ist die übliche, professionelle Formulierung für Therapieempfehlungen."
      },
      {
        type: "fill",
        text: "Wir bedanken uns für die freundliche ___ (Mitbeurteilung) und verbleiben mit kollegialen Grüßen.",
        answer: "Mitbeurteilung",
        explanation: "Standardschlussformel am Ende eines Arztbriefs, wenn ein Konsil angefordert wurde."
      }
    ]
  },
  {
    id: "ab-diagnosen-medikamente",
    part: "arztbrief",
    topic: "Diagnosen & Medikation",
    title: "Diagnosen & Medikamente formulieren",
    description: "Korrekte Formatierung von Diagnoselisten und Medikationsplänen.",
    exercises: [
      {
        type: "mc",
        question: "Wie wird die Hauptdiagnose im Arztbrief typischerweise eingeleitet?",
        options: [
          "Diagnosen: 1. Akute Appendizitis",
          "Er hat eine Appendizitis.",
          "Krankheit: Blinddarm",
          "Diagnose vielleicht Appendizitis"
        ],
        answerIndex: 0,
        explanation: "Diagnosen werden nummeriert und mit Fachterminologie aufgelistet, Hauptdiagnose zuerst."
      },
      {
        type: "vocab",
        term: "der Zustand nach (Z. n.)",
        definition: "status post / history of (a past procedure or event)",
        example: "Z. n. Appendektomie 2019."
      },
      {
        type: "fill",
        text: "Nebendiagnosen: arterieller Hypertonus, Diabetes mellitus Typ 2, Z. n. ___ (Cholezystektomie) 2018.",
        answer: "Cholezystektomie",
        explanation: "Nebendiagnosen und relevante Voroperationen werden mit Jahresangabe aufgeführt."
      },
      {
        type: "mc",
        question: "Wie wird ein Medikament korrekt im Medikationsplan angegeben?",
        options: [
          "Metformin 1000 mg, 1-0-1",
          "Metformin, morgens und abends ungefähr",
          "Er nimmt Metformin manchmal",
          "Tabletten gegen Zucker"
        ],
        answerIndex: 0,
        explanation: "Wirkstoff, Dosierung und Einnahmeschema (z. B. 1-0-1 für morgens-mittags-abends) gehören in den Medikationsplan."
      },
      {
        type: "vocab",
        term: "die Bedarfsmedikation",
        definition: "as-needed medication (PRN)",
        example: "Ibuprofen 400 mg als Bedarfsmedikation bei Schmerzen."
      },
      {
        type: "fill",
        text: "Wir bitten um Fortführung der aktuellen Medikation sowie um ___ (Wiedervorstellung) bei Beschwerdepersistenz.",
        answer: "Wiedervorstellung",
        explanation: "Standardformulierung, um die Nachsorge und mögliche Wiedervorstellung des Patienten zu regeln."
      }
    ]
  },

  // ---------------------------------------------------------------------
  // PART 3: FACHGESPRÄCH
  // ---------------------------------------------------------------------
  {
    id: "fg-verdachtsdiagnosen",
    part: "fachgespraech",
    topic: "Differenzialdiagnose",
    title: "Verdachtsdiagnosen stellen",
    description: "Differenzialdiagnostisches Denken bei typischen Leitsymptomen.",
    exercises: [
      {
        type: "mc",
        question: "Ein 55-jähriger Patient mit plötzlichem, retrosternalem Druckschmerz, Ausstrahlung in den linken Arm und Schweißausbruch. Wichtigste Verdachtsdiagnose?",
        options: [
          "Akutes Koronarsyndrom",
          "Gastritis",
          "Muskelkater",
          "Migräne"
        ],
        answerIndex: 0,
        explanation: "Die klassische Symptomtrias (retrosternaler Druckschmerz, Ausstrahlung, Schweißausbruch) ist hochverdächtig auf ein ACS und muss sofort abgeklärt werden."
      },
      {
        type: "vocab",
        term: "die Differenzialdiagnose",
        definition: "differential diagnosis",
        example: "Als Differenzialdiagnosen kommen neben der Appendizitis auch eine Adnexitis oder eine Divertikulitis in Frage."
      },
      {
        type: "mc",
        question: "Rechtsseitiger Unterbauchschmerz mit Loslassschmerz und Fieber bei einer jungen Frau. Welche zwei Differenzialdiagnosen sollten Sie unbedingt nennen?",
        options: [
          "Appendizitis und Adnexitis / Extrauteringravidität",
          "Migräne und Erkältung",
          "Rückenschmerzen und Muskelverspannung",
          "Sodbrennen und Blähungen"
        ],
        answerIndex: 0,
        explanation: "Bei jungen Frauen mit Unterbauchschmerz müssen immer auch gynäkologische Ursachen (Adnexitis, ektope Schwangerschaft) genannt werden."
      },
      {
        type: "vocab",
        term: "richtungsweisend",
        definition: "indicative / pointing towards (a diagnosis)",
        example: "Der Loslassschmerz im rechten Unterbauch ist richtungsweisend für eine Appendizitis."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie eine Verdachtsdiagnose gegenüber dem Oberarzt am professionellsten?",
        options: [
          "Aufgrund der Anamnese und des klinischen Befundes gehe ich am ehesten von einer Appendizitis aus.",
          "Ich glaube, es ist der Blinddarm.",
          "Vielleicht Blinddarm, bin nicht sicher.",
          "Der Patient hat wahrscheinlich irgendwas im Bauch."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte, begründete Formulierung mit Bezug auf Anamnese und Befund wirkt professionell und ist im Fachgespräch erwartet."
      }
    ]
  },
  {
    id: "fg-diagnostik",
    part: "fachgespraech",
    topic: "Diagnostisches Vorgehen",
    title: "Diagnostisches Vorgehen",
    description: "Welche Untersuchungen bei welchem Verdacht sinnvoll sind.",
    exercises: [
      {
        type: "mc",
        question: "Welche Untersuchung ist bei Verdacht auf akutes Koronarsyndrom die wichtigste Erstmaßnahme?",
        options: [
          "12-Kanal-EKG und Troponin-Bestimmung",
          "Röntgen des Fußes",
          "Ultraschall der Schilddrüse",
          "Hörtest"
        ],
        answerIndex: 0,
        explanation: "EKG und Troponin sind die zentralen Erstuntersuchungen zur Abklärung eines ACS."
      },
      {
        type: "vocab",
        term: "die Bildgebung",
        definition: "imaging (radiological studies)",
        example: "Zur weiteren Abklärung empfehlen wir eine Bildgebung mittels Abdomensonographie."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf Appendizitis am sinnvollsten?",
        options: [
          "Labor (Entzündungsparameter), Abdomensonographie, ggf. CT",
          "Nur ein Bluttest auf Blutgruppe",
          "Röntgen des Schädels",
          "EKG"
        ],
        answerIndex: 0,
        explanation: "Bei V. a. Appendizitis stehen Entzündungsparameter und Sonographie im Vordergrund, ergänzt durch CT bei Unklarheit."
      },
      {
        type: "vocab",
        term: "die Verlaufskontrolle",
        definition: "follow-up / monitoring over time",
        example: "Wir empfehlen eine Verlaufskontrolle der Entzündungsparameter nach 6 Stunden."
      },
      {
        type: "fill",
        text: "Zur weiteren Abklärung eines Diabetes mellitus bestimmen wir den ___ (HbA1c-Wert) sowie den Nüchternblutzucker.",
        answer: "HbA1c-Wert",
        explanation: "Der HbA1c-Wert zeigt die Blutzuckereinstellung der letzten 8-12 Wochen und ist zentral für Diagnose und Verlaufskontrolle."
      }
    ]
  },
  {
    id: "fg-fallpraesentation",
    part: "fachgespraech",
    topic: "Fallpräsentation",
    title: "Fallpräsentation",
    description: "Strukturierte, professionelle Vorstellung eines Patientenfalls.",
    exercises: [
      {
        type: "mc",
        question: "Wie beginnen Sie eine strukturierte Fallpräsentation?",
        options: [
          "Ich möchte Ihnen einen 45-jährigen Patienten vorstellen, der sich mit seit zwei Tagen bestehenden Bauchschmerzen vorgestellt hat.",
          "Da ist ein Patient mit Bauchweh.",
          "Also, der Patient, ähm, hat Schmerzen.",
          "Bauchschmerzen, 45 Jahre, Mann."
        ],
        answerIndex: 0,
        explanation: "Eine klare Einleitung mit Alter, Geschlecht, Leitsymptom und Dauer ist der professionelle Standardeinstieg."
      },
      {
        type: "vocab",
        term: "im Vordergrund stehen",
        definition: "to be the main/predominant feature",
        example: "Klinisch steht der rechtsseitige Unterbauchschmerz im Vordergrund."
      },
      {
        type: "mc",
        question: "In welcher Reihenfolge sollte eine Fallpräsentation idealerweise aufgebaut sein?",
        options: [
          "Patientendaten → Anamnese → Befund → Verdachtsdiagnose → geplantes Vorgehen",
          "Verdachtsdiagnose → Name des Patienten → Wetter",
          "Therapie → Anamnese → Diagnose",
          "Zufällige Reihenfolge, Hauptsache alles wird erwähnt"
        ],
        answerIndex: 0,
        explanation: "Eine logische Struktur erleichtert dem Zuhörer das Verständnis und ist im Fachgespräch entscheidend für den professionellen Eindruck."
      },
      {
        type: "vocab",
        term: "das Procedere",
        definition: "the planned course of action / next steps",
        example: "Das weitere Procedere umfasst eine Sonographie sowie eine chirurgische Vorstellung."
      },
      {
        type: "fill",
        text: "Zusammenfassend gehe ich bei diesem Patienten am ehesten von einer akuten Appendizitis aus und schlage als nächsten Schritt eine ___ (chirurgische) Konsultation vor.",
        answer: "chirurgische",
        explanation: "Der Abschluss der Fallpräsentation sollte immer eine klare Handlungsempfehlung enthalten."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Was wäre Ihre wichtigste Differenzialdiagnose?" Wie antworten Sie professionell?",
        options: [
          "Neben der Appendizitis denke ich differenzialdiagnostisch auch an eine Divertikulitis oder eine Adnexitis.",
          "Keine Ahnung, vielleicht mehrere Sachen.",
          "Nur Appendizitis, sonst nichts.",
          "Das habe ich nicht bedacht."
        ],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt die Hauptdiagnose und mindestens eine plausible Alternative – das zeigt strukturiertes klinisches Denken."
      }
    ]
  }
];
