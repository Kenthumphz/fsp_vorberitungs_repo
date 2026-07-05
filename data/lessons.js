// Lesson content for the FSP Trainer.
// Each lesson belongs to one of the three FSP exam parts:
//   anamnese      -> Anamnesegespräch (doctor-patient history taking)
//   arztbrief     -> schriftlicher Arztbrief (written case report)
//   fachgespraech -> Fachgespräch (doctor-doctor case discussion)
//
// Exercise types supported by app.js:
//   'mc'    multiple choice   { question, options[], answerIndex, explanation }
//   'cloze' fill in the blank, option-based { text (contains ___), options[], answerIndex, explanation, hint? }
//   'vocab' flashcard         { term, definition, example? }
//
// For 'mc' and 'cloze', option order is shuffled at render time (see
// shuffledIndices() in app.js) — the correct answer does not need to be
// (and should not be) always authored at index 0.

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
        explanation: "„Seit wann...?“ erfragt den zeitlichen Beginn der Beschwerden – ein zentraler Bestandteil der Anamnese."
      },
      {
        type: "vocab",
        term: "die Ausstrahlung",
        definition: "radiation (of pain) — e.g. pain spreading to the arm or jaw",
        example: "Strahlen die Schmerzen in den linken Arm oder in den Kiefer aus?"
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf ein akutes Koronarsyndrom beschreibt der Patient den Brustschmerz typischerweise als ___.",
        options: ["dumpf und drückend", "hell und juckend", "stechend und scharf", "pulsierend im Takt des Pulses"],
        answerIndex: 0,
        explanation: "Bei Verdacht auf ACS wird der Schmerzcharakter typischerweise als dumpf/drückend beschrieben, im Gegensatz zu stechendem Schmerz (eher muskuloskelettal)."
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
        type: "cloze",
        text: "Haben Sie zusätzlich zu den Schmerzen auch ___ bemerkt?",
        options: ["Luftnot oder Schweißausbruch", "Juckreiz am Bein", "Verstopfung", "Ohrenschmerzen"],
        answerIndex: 0,
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
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum Sie jetzt ein EKG schreiben und Blut abnehmen möchten?",
        options: [
          "Wir vermuten, dass die Beschwerden vom Herzen kommen könnten. Deshalb machen wir jetzt ein EKG und einen Bluttest, um das genau zu prüfen.",
          "Sie haben ganz sicher einen Herzinfarkt.",
          "Das ist bestimmt nichts Schlimmes, machen Sie sich keine Gedanken.",
          "Das erkläre ich Ihnen, wenn die Ergebnisse da sind."
        ],
        answerIndex: 0,
        explanation: "Gute Patientenkommunikation ist ehrlich und beruhigend zugleich: den Verdacht benennen, das Vorgehen erklären, ohne vorschnell eine Diagnose zu stellen oder die Sorgen des Patienten zu übergehen."
      },
      {
        type: "cloze",
        text: "Wir werden jetzt ein EKG schreiben und Ihnen Blut abnehmen, um einen ___ auszuschließen.",
        options: ["Herzinfarkt", "Beinbruch", "Sonnenbrand", "Schnupfen"],
        answerIndex: 0,
        explanation: "Der Patient sollte in einfachen Worten erfahren, wonach konkret gesucht wird — das schafft Vertrauen und reduziert Angst."
      },
      {
        type: "vocab",
        term: "beruhigen, ohne zu verharmlosen",
        definition: "to reassure without downplaying — a core patient-communication skill",
        example: "Ich verstehe, dass das beunruhigend ist. Wir nehmen Ihre Beschwerden ernst und klären das jetzt gründlich ab."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie am Ende des Gesprächs, ob der Patient Ihre Erklärung verstanden hat?",
        options: [
          "Habe ich das verständlich erklärt, oder haben Sie noch Fragen dazu?",
          "Alles klar?",
          "Sie haben doch verstanden, oder?",
          "Kein weiterer Kommentar nötig."
        ],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage gibt dem Patienten echten Raum für Nachfragen, statt ihn nur pauschal zu bestätigen."
      },
      {
        type: "cloze",
        text: "Bevor wir Ihnen Blut abnehmen, möchte ich kurz Ihr ___ dazu einholen.",
        options: ["Einverständnis", "Rezept", "Zeugnis", "Trinkgeld"],
        answerIndex: 0,
        explanation: "Vor jeder Maßnahme, auch einer einfachen Blutabnahme, gehört eine kurze Aufklärung und das Einholen des Einverständnisses zum professionellen Standard."
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
        type: "cloze",
        text: "Ist Ihr Stuhlgang ___ oder haben Sie zuletzt eine Veränderung bemerkt?",
        options: ["regelmäßig", "immer blutig", "schmerzlos beim Sitzen", "nur nachts vorhanden"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Verstärkt sich der Schmerz, wenn Sie Ihre Hand nach dem Eindrücken der Bauchdecke plötzlich ___?",
        options: ["loslassen", "auflegen", "erwärmen", "leicht anheben"],
        answerIndex: 0,
        explanation: "Dieses Manöver prüft den sogenannten „Loslassschmerz“ (rebound tenderness) — ein klassisches Peritonismus-Zeichen, z. B. bei Appendizitis."
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
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich den Verdacht auf eine Blinddarmentzündung?",
        options: [
          "Nach der Untersuchung vermuten wir eine Entzündung des Blinddarms. Deshalb machen wir jetzt einen Ultraschall, um das genauer zu prüfen.",
          "Sie haben eine Blinddarmentzündung, das ist sicher.",
          "Das ist wahrscheinlich nur Blähungen, kein Grund zur Sorge.",
          "Wir müssen erst den Chefarzt fragen, bevor ich Ihnen etwas sagen kann."
        ],
        answerIndex: 0,
        explanation: "Der Verdacht wird benannt, das weitere Vorgehen erklärt — ohne die Diagnose vorschnell als sicher hinzustellen oder die Beschwerden zu verharmlosen."
      },
      {
        type: "cloze",
        text: "Wenn sich der Verdacht auf eine Blinddarmentzündung bestätigt, wird wahrscheinlich eine ___ notwendig sein.",
        options: ["Operation", "Bettruhe", "Diät", "Massage"],
        answerIndex: 0,
        explanation: "Der Patient sollte frühzeitig und in einfachen Worten über eine mögliche Operation informiert werden, damit er sich darauf einstellen kann."
      },
      {
        type: "vocab",
        term: "die Aufklärung",
        definition: "informing the patient about a procedure/diagnosis so they can give informed consent",
        example: "Vor der Operation erfolgt noch eine ausführliche Aufklärung durch den Chirurgen."
      },
      {
        type: "mc",
        question: "Der Patient wirkt sehr ängstlich. Welche Antwort ist beruhigend, ohne die Beschwerden herunterzuspielen?",
        options: [
          "Ich verstehe, dass Sie sich Sorgen machen. Wir untersuchen das jetzt gründlich und kümmern uns gut um Sie.",
          "Das ist doch nur ein bisschen Bauchweh.",
          "Machen Sie sich keine Sorgen, das ist bestimmt nichts.",
          "Andere Patienten haben viel schlimmere Schmerzen."
        ],
        answerIndex: 0,
        explanation: "Empathie zeigen und gleichzeitig Handlungssicherheit vermitteln, ohne die Sorgen des Patienten abzuwerten oder zu bagatellisieren."
      },
      {
        type: "cloze",
        text: "Habe ich das verständlich erklärt, oder haben Sie noch ___?",
        options: ["Fragen", "Schmerzen", "Termine", "Rechnungen"],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage am Ende der Erklärung stellt sicher, dass der Patient wirklich alles verstanden hat."
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
        type: "cloze",
        text: "Kontrollieren Sie Ihren Blutzucker ___ und wie hoch sind Ihre Werte meistens?",
        options: ["regelmäßig", "nur beim Arzt", "gar nicht", "einmal im Jahr"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Gibt es in Ihrer Familie weitere Fälle von ___ oder anderen Stoffwechselerkrankungen?",
        options: ["Diabetes", "Migräne", "Rückenschmerzen", "Heuschnupfen"],
        answerIndex: 0,
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
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten seinen HbA1c-Wert verständlich, ohne medizinischen Fachjargon?",
        options: [
          "Dieser Wert zeigt, wie gut Ihr Blutzucker in den letzten drei Monaten eingestellt war — bei Ihnen ist er noch etwas zu hoch.",
          "Ihr HbA1c ist bei 8,2 Prozent, das ist erhöht.",
          "Das ist kompliziert, das erkläre ich Ihnen ein anderes Mal.",
          "Machen Sie sich darüber keine Gedanken."
        ],
        answerIndex: 0,
        explanation: "Laborwerte sollten in patientenverständlicher Sprache und mit konkreter Bedeutung erklärt werden, nicht nur als Zahl genannt oder abgetan werden."
      },
      {
        type: "cloze",
        text: "Um Ihre Werte besser einzustellen, empfehle ich Ihnen zusätzlich eine ___ bei einem Diabetologen.",
        options: ["Vorstellung", "Impfung", "Röntgenaufnahme", "Bluttransfusion"],
        answerIndex: 0,
        explanation: "Nächste Schritte (z. B. eine fachärztliche Mitbetreuung) sollten dem Patienten konkret und nachvollziehbar erklärt werden."
      },
      {
        type: "vocab",
        term: "das Einverständnis",
        definition: "consent — obtained before starting or changing a treatment such as insulin therapy",
        example: "Bevor wir die Insulintherapie beginnen, brauche ich Ihr Einverständnis dazu."
      },
      {
        type: "mc",
        question: "Der Patient hat Angst vor einer Insulintherapie. Wie reagieren Sie einfühlsam?",
        options: [
          "Ich verstehe Ihre Sorge. Lassen Sie uns gemeinsam besprechen, wie das im Alltag funktioniert und was Ihnen Sicherheit gibt.",
          "Das ist nicht schlimm, das machen alle.",
          "Ohne Insulin werden Sie schwere Komplikationen bekommen.",
          "Darüber müssen wir jetzt nicht sprechen."
        ],
        answerIndex: 0,
        explanation: "Ängste ernst nehmen und den Patienten aktiv in die Entscheidung einbeziehen, statt Druck aufzubauen oder das Thema abzuwürgen."
      },
      {
        type: "cloze",
        text: "Ein Diabetes lässt sich mit der richtigen Behandlung gut ___, auch wenn er nicht heilbar ist.",
        options: ["kontrollieren", "ignorieren", "verheimlichen", "verzögern"],
        answerIndex: 0,
        explanation: "Eine realistische, aber hoffnungsvolle Formulierung hilft Patienten, eine chronische Diagnose besser anzunehmen."
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
        type: "cloze",
        text: "Der Patient stellte sich mit seit zwei Tagen bestehenden ___ im rechten Unterbauch vor.",
        options: ["Schmerzen", "Juckreiz", "Schwellungen", "Rötungen"],
        answerIndex: 0,
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
        explanation: "Im Arztbrief wird die indirekte, formelle Formulierung „Der Patient berichtet über...“ verwendet."
      },
      {
        type: "vocab",
        term: "anamnestisch bekannt",
        definition: "known from the (patient's) history — standard phrase to introduce pre-existing conditions",
        example: "Anamnestisch ist ein arterieller Hypertonus bekannt."
      },
      {
        type: "cloze",
        text: "An Vorerkrankungen sind ein arterieller Hypertonus sowie ein Diabetes mellitus Typ 2 ___.",
        options: ["bekannt", "vermutet", "ausgeschlossen", "unbehandelt geblieben"],
        answerIndex: 0,
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
        explanation: "„Allergien sind nicht bekannt“ ist die im Arztbrief übliche, neutrale Standardformulierung."
      },
      {
        type: "vocab",
        term: "die Sozialanamnese",
        definition: "social history (living situation, occupation, substance use)",
        example: "In der Sozialanamnese zeigt sich ein gelegentlicher Nikotinkonsum von 5 Zigaretten pro Tag."
      },
      {
        type: "cloze",
        text: "Die Medikamentenanamnese ergab die regelmäßige Einnahme von Metformin und ___.",
        options: ["Ramipril", "Amoxicillin", "Ibuprofen", "Paracetamol"],
        answerIndex: 0,
        explanation: "Der Medikamentenabschnitt listet alle regelmäßig eingenommenen Präparate mit Wirkstoffnamen auf; Ramipril passt zum bekannten arteriellen Hypertonus."
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
        explanation: "„Bei der körperlichen Untersuchung zeigte sich...“ ist die Standardformel zur Einleitung des Untersuchungsbefundes."
      },
      {
        type: "cloze",
        text: "Laborchemisch zeigten sich erhöhte Entzündungsparameter mit einem CRP von 80 mg/l bei ___.",
        options: ["Leukozytose", "Anämie", "Thrombozytopenie", "Hypoglykämie"],
        answerIndex: 0,
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
        explanation: "„Wir empfehlen...“ ist die übliche, professionelle Formulierung für Therapieempfehlungen."
      },
      {
        type: "cloze",
        text: "Wir bedanken uns für die freundliche ___ und verbleiben mit kollegialen Grüßen.",
        options: ["Mitbeurteilung", "Einladung", "Rechnung", "Terminvereinbarung"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Nebendiagnosen: arterieller Hypertonus, Diabetes mellitus Typ 2, Z. n. ___ 2018.",
        options: ["Cholezystektomie", "Erkältung", "Kopfschmerzen", "Nasenbluten"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Wir bitten um Fortführung der aktuellen Medikation sowie um ___ bei Beschwerdepersistenz.",
        options: ["Wiedervorstellung", "Zweitmeinung", "Kostenübernahme", "Terminabsage"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Zur weiteren Abklärung eines Diabetes mellitus bestimmen wir den ___ sowie den Nüchternblutzucker.",
        options: ["HbA1c-Wert", "D-Dimer-Wert", "PSA-Wert", "TSH-Wert"],
        answerIndex: 0,
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
        type: "cloze",
        text: "Zusammenfassend gehe ich bei diesem Patienten am ehesten von einer akuten Appendizitis aus und schlage als nächsten Schritt eine ___ Konsultation vor.",
        options: ["chirurgische", "dermatologische", "psychiatrische", "orthopädische"],
        answerIndex: 0,
        explanation: "Der Abschluss der Fallpräsentation sollte immer eine klare Handlungsempfehlung enthalten."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Was wäre Ihre wichtigste Differenzialdiagnose?“ Wie antworten Sie professionell?",
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
