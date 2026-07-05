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
//
// Each lesson holds a `pool` of exercises (not all shown per playthrough).
// startLesson() in app.js randomly draws SESSION_SIZE exercises from the
// pool each time a lesson is (re)played, so repeat practice sees a
// different mix instead of the exact same set every time.

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
    pool: [
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
    pool: [
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
    pool: [
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

  {
    id: "an-dyspnoe",
    part: "anamnese",
    topic: "Pneumologie",
    title: "Dyspnoe",
    description: "Anamnese und Patientenkommunikation bei akuter und chronischer Atemnot.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie am besten nach dem Beginn der Atemnot?",
        options: ["Seit wann haben Sie die Atemnot?", "Warum atmen Sie?", "Atmen Sie oft schlecht?", "Wo tut es weh?"],
        answerIndex: 0,
        explanation: "Der zeitliche Beginn (akut vs. schleichend) ist entscheidend für die Differenzialdiagnose der Dyspnoe."
      },
      {
        type: "vocab",
        term: "die Belastungsdyspnoe",
        definition: "dyspnea on exertion",
        example: "Tritt die Atemnot bei Belastung auf oder auch in Ruhe?"
      },
      {
        type: "cloze",
        text: "Ist Ihr Husten eher ___ oder trocken?",
        options: ["produktiv, mit Auswurf", "stechend", "laut", "nächtlich"],
        answerIndex: 0,
        explanation: "Die Unterscheidung produktiv vs. trocken hilft, zwischen Infektion/COPD und anderen Ursachen zu differenzieren."
      },
      {
        type: "mc",
        question: "Welche Frage prüft gezielt einen Risikofaktor für eine chronische Lungenerkrankung?",
        options: ["Rauchen Sie, und wenn ja, wie viele Packungsjahre?", "Haben Sie Kinder?", "Welchem Hobby gehen Sie nach?", "Reisen Sie gerne?"],
        answerIndex: 0,
        explanation: "Packungsjahre (pack-years) sind der zentrale anamnestische Risikofaktor für COPD."
      },
      {
        type: "vocab",
        term: "die Orthopnoe",
        definition: "orthopnea — breathlessness when lying flat, relieved by sitting up",
        example: "Müssen Sie nachts mit mehreren Kissen schlafen, weil Sie sonst schlecht Luft bekommen?"
      },
      {
        type: "cloze",
        text: "Haben Sie zusätzlich zur Atemnot auch ___ bemerkt?",
        options: ["Schmerzen beim Einatmen oder Fieber", "Juckreiz an den Händen", "Verstopfung", "Ohrensausen"],
        answerIndex: 0,
        explanation: "Pleuritischer Schmerz und Fieber erhöhen den Verdacht auf eine Pneumonie oder Pleuritis."
      },
      {
        type: "mc",
        question: "Der Patient berichtet über plötzlich einsetzende, starke Atemnot mit stechendem Brustschmerz nach einem Langstreckenflug. Woran denken Sie zuerst?",
        options: ["Lungenembolie", "Erkältung", "Muskelkater", "Sodbrennen"],
        answerIndex: 0,
        explanation: "Immobilisation (z. B. Langstreckenflug) ist ein klassischer Risikofaktor für eine Lungenembolie."
      },
      {
        type: "vocab",
        term: "die Ruhedyspnoe",
        definition: "dyspnea at rest — a red flag indicating more severe disease",
        example: "Besteht die Atemnot auch in Ruhe oder nur bei Anstrengung?"
      },
      {
        type: "cloze",
        text: "Wie viele Stockwerke können Sie steigen, bevor Sie ___ bekommen?",
        options: ["Luftnot", "Hunger", "Durst", "Kopfschmerzen"],
        answerIndex: 0,
        explanation: "Das Quantifizieren der Belastungsgrenze hilft, den Schweregrad der Dyspnoe einzuschätzen."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, dass Sie eine Lungenembolie ausschließen möchten?",
        options: [
          "Wir vermuten, dass sich möglicherweise ein Blutgerinnsel in der Lunge befindet. Deshalb machen wir jetzt eine Bildgebung und einen Bluttest.",
          "Sie haben sicher eine Lungenembolie.",
          "Das ist bestimmt nur Stress.",
          "Dazu sage ich jetzt nichts."
        ],
        answerIndex: 0,
        explanation: "Den Verdacht benennen und das Vorgehen erklären, ohne die Diagnose vorschnell als sicher hinzustellen."
      },
      {
        type: "cloze",
        text: "Wir müssen Sie jetzt zur weiteren Abklärung in die ___ aufnehmen.",
        options: ["Klinik", "Kantine", "Apotheke", "Bibliothek"],
        answerIndex: 0,
        explanation: "Eine stationäre Aufnahme sollte dem Patienten klar und in einfachen Worten erklärt werden."
      },
      {
        type: "vocab",
        term: "die Sauerstoffsättigung",
        definition: "oxygen saturation",
        example: "Wir messen jetzt Ihre Sauerstoffsättigung mit diesem kleinen Clip am Finger."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient Ihre Erklärung zur Sauerstoffgabe verstanden hat?",
        options: ["Ist das für Sie soweit verständlich, oder haben Sie noch Fragen?", "Verstanden?", "Klar, oder?", "Kein Kommentar nötig."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage gibt echten Raum für Nachfragen, statt nur eine pauschale Bestätigung einzufordern."
      },
      {
        type: "cloze",
        text: "Machen Sie sich keine allzu großen Sorgen, wir ___ Sie jetzt gut.",
        options: ["untersuchen", "vergessen", "ignorieren", "verlassen"],
        answerIndex: 0,
        explanation: "Beruhigung, ohne die Beschwerden des Patienten herunterzuspielen."
      }
    ]
  },
  {
    id: "an-kopfschmerzen",
    part: "anamnese",
    topic: "Neurologie",
    title: "Kopfschmerzen",
    description: "Anamnese bei Kopfschmerz inklusive Warnzeichen (Red Flags) und Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach dem Charakter des Kopfschmerzes?",
        options: ["Ist der Schmerz eher pochend-pulsierend oder drückend wie ein Band um den Kopf?", "Haben Sie oft Kopfschmerzen?", "Wo wohnen Sie?", "Nehmen Sie Tabletten?"],
        answerIndex: 0,
        explanation: "Der Schmerzcharakter unterscheidet z. B. Migräne (pulsierend) von Spannungskopfschmerz (drückend)."
      },
      {
        type: "vocab",
        term: "der Vernichtungskopfschmerz",
        definition: "thunderclap headache — sudden, extremely severe headache, red flag for subarachnoid hemorrhage",
        example: "Kam der Kopfschmerz plötzlich wie aus heiterem Himmel, so stark wie nie zuvor?"
      },
      {
        type: "cloze",
        text: "Haben Sie zusätzlich zum Kopfschmerz auch ___ bemerkt?",
        options: ["Sehstörungen oder Übelkeit", "Juckreiz am Arm", "Verstopfung", "Ohrensausen"],
        answerIndex: 0,
        explanation: "Begleitsymptome wie Sehstörungen oder Übelkeit sind typisch für Migräne, müssen aber auch an gefährlichere Ursachen denken lassen."
      },
      {
        type: "mc",
        question: "Welche Frage prüft ein neurologisches Warnzeichen (Red Flag)?",
        options: ["Haben Sie eine Nackensteifigkeit oder Fieber bemerkt?", "Trinken Sie gerne Kaffee?", "Haben Sie Geschwister?", "Sind Sie sportlich aktiv?"],
        answerIndex: 0,
        explanation: "Nackensteifigkeit mit Fieber ist ein Warnzeichen für eine Meningitis und erfordert sofortiges Handeln."
      },
      {
        type: "vocab",
        term: "die Aura",
        definition: "aura — neurological symptoms (e.g. visual disturbances) preceding a migraine attack",
        example: "Haben Sie vor dem Kopfschmerz Sehstörungen wie Blitze oder Zickzacklinien bemerkt?"
      },
      {
        type: "cloze",
        text: "Ist der Kopfschmerz eher ___ betont oder beidseitig?",
        options: ["einseitig", "morgens", "abends", "wochenends"],
        answerIndex: 0,
        explanation: "Einseitiger, pulsierender Kopfschmerz ist typisch für Migräne; beidseitiger, drückender Schmerz eher für Spannungskopfschmerz."
      },
      {
        type: "mc",
        question: "Eine 35-jährige Patientin berichtet über den stärksten Kopfschmerz ihres Lebens, plötzlich beginnend. Woran denken Sie zuerst?",
        options: ["Subarachnoidalblutung", "Spannungskopfschmerz", "Migräne ohne Aura", "Erkältung"],
        answerIndex: 0,
        explanation: "Ein plötzlicher, vernichtender Kopfschmerz („worst headache of my life“) ist bis zum Beweis des Gegenteils verdächtig auf eine Subarachnoidalblutung."
      },
      {
        type: "vocab",
        term: "die Photophobie",
        definition: "photophobia — sensitivity to light",
        example: "Stört Sie helles Licht während der Kopfschmerzattacke?"
      },
      {
        type: "cloze",
        text: "Verschlimmert sich der Kopfschmerz beim ___ oder beim Pressen?",
        options: ["Husten", "Sitzen", "Sprechen", "Schlafen"],
        answerIndex: 0,
        explanation: "Verschlimmerung durch Husten/Pressen deutet auf einen erhöhten Hirndruck hin und ist ein Warnzeichen."
      },
      {
        type: "mc",
        question: "Wie erklären Sie einer Patientin verständlich, warum Sie ein CT des Kopfes veranlassen?",
        options: [
          "Bei so einem plötzlichen, sehr starken Kopfschmerz möchten wir sicherheitshalber eine Blutung im Kopf ausschließen. Dafür machen wir jetzt eine Computertomographie.",
          "Das ist bestimmt nur Stress, aber wir machen trotzdem ein Bild.",
          "Wir müssen das jetzt einfach so machen, ohne Grund.",
          "Ein CT ist immer notwendig bei Kopfschmerzen."
        ],
        answerIndex: 0,
        explanation: "Den Grund für eine dringliche Untersuchung ruhig und verständlich zu erklären, nimmt Angst und schafft Vertrauen."
      },
      {
        type: "cloze",
        text: "Ich verstehe, dass das beängstigend klingt, aber wir ___ das jetzt sofort ab.",
        options: ["klären", "verschieben", "ignorieren", "vergessen"],
        answerIndex: 0,
        explanation: "Empathische, aber handlungssichere Kommunikation bei einem potenziell ernsten Befund."
      },
      {
        type: "vocab",
        term: "die Meningismuszeichen",
        definition: "signs of meningeal irritation (e.g. neck stiffness), checked when meningitis is suspected",
        example: "Wir prüfen jetzt kurz, ob Meningismuszeichen vorliegen, indem ich Ihren Kopf leicht nach vorne beuge."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie am Ende, ob die Patientin die Dringlichkeit verstanden hat?",
        options: [
          "Ist Ihnen klar, warum wir das jetzt zeitnah abklären möchten? Haben Sie noch Fragen?",
          "Alles klar, oder?",
          "Das war's dann.",
          "Sie haben doch verstanden, oder?"
        ],
        answerIndex: 0,
        explanation: "Gerade bei dringlichen Befunden sollte aktiv nach dem Verständnis gefragt werden."
      }
    ]
  },
  {
    id: "an-fieber-infekt",
    part: "anamnese",
    topic: "Infektiologie",
    title: "Fieber & Infektion",
    description: "Anamnese bei Fieber unklarer Genese inklusive Sepsis-Warnzeichen und Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach dem Fieberverlauf?",
        options: ["Seit wann haben Sie Fieber, und wie hoch war die höchste gemessene Temperatur?", "Haben Sie oft Fieber?", "Frieren Sie gerne?", "Wie alt sind Sie?"],
        answerIndex: 0,
        explanation: "Dauer und Höhe des Fiebers sind zentrale anamnestische Basisinformationen."
      },
      {
        type: "vocab",
        term: "der Schüttelfrost",
        definition: "chills / shivering fit — often accompanies a rapid rise in body temperature, can indicate bacteremia",
        example: "Hatten Sie zusätzlich zum Fieber auch Schüttelfrost?"
      },
      {
        type: "cloze",
        text: "Haben Sie zusätzlich zum Fieber auch ___ bemerkt?",
        options: ["Schmerzen beim Wasserlassen oder Husten", "Juckreiz an den Füßen", "Verstopfung", "Ohrensausen"],
        answerIndex: 0,
        explanation: "Begleitsymptome helfen, die Infektionsquelle einzugrenzen (z. B. Harnwege, Atemwege)."
      },
      {
        type: "mc",
        question: "Welche Frage prüft ein mögliches Sepsis-Warnzeichen?",
        options: ["Fühlen Sie sich zunehmend verwirrt oder sehr schwach?", "Haben Sie Hunger?", "Schlafen Sie gut?", "Haben Sie Haustiere?"],
        answerIndex: 0,
        explanation: "Verwirrtheit und ausgeprägte Schwäche können auf eine beginnende Sepsis hinweisen und erfordern rasches Handeln."
      },
      {
        type: "vocab",
        term: "die Bakteriämie",
        definition: "bacteremia — presence of bacteria in the bloodstream",
        example: "Bei Verdacht auf eine Bakteriämie entnehmen wir vor der Antibiotikagabe Blutkulturen."
      },
      {
        type: "cloze",
        text: "Waren Sie in letzter Zeit im ___ , wo es andere Infektionskrankheiten geben könnte?",
        options: ["Ausland", "Kino", "Supermarkt", "Park"],
        answerIndex: 0,
        explanation: "Reiseanamnese ist bei Fieber unklarer Genese ein wichtiger Baustein (z. B. Malaria, Typhus)."
      },
      {
        type: "mc",
        question: "Ein Patient mit Fieber, Tachykardie und niedrigem Blutdruck nach einer Harnwegsinfektion. Woran denken Sie zuerst?",
        options: ["Urosepsis", "Migräne", "Magenverstimmung", "Muskelkater"],
        answerIndex: 0,
        explanation: "Fieber, Tachykardie und Hypotonie nach einem Harnwegsinfekt sind typisch für eine Urosepsis und ein Notfall."
      },
      {
        type: "vocab",
        term: "die Blutkultur",
        definition: "blood culture — test to identify bacteria/fungi in the blood",
        example: "Wir nehmen jetzt vor der ersten Antibiotikagabe zwei Blutkulturen ab."
      },
      {
        type: "cloze",
        text: "Sind Sie in letzter Zeit gegen ___ geimpft worden oder ist Ihr Impfstatus unklar?",
        options: ["Grippe oder andere Erreger", "Heuschnupfen", "Sonnenlicht", "Lärm"],
        answerIndex: 0,
        explanation: "Der Impfstatus ist bei Fieber unklarer Genese Teil einer vollständigen Anamnese."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum Sie vor der Antibiotikagabe Blutkulturen abnehmen?",
        options: [
          "Wir nehmen jetzt kurz Blutproben ab, um den genauen Erreger zu finden, bevor wir mit dem Antibiotikum beginnen.",
          "Das ist nur Routine, keine Ahnung wofür.",
          "Blut brauchen wir sowieso immer.",
          "Das erkläre ich Ihnen ein anderes Mal."
        ],
        answerIndex: 0,
        explanation: "Der Grund für die Blutentnahme vor Antibiotikagabe sollte kurz und verständlich erklärt werden."
      },
      {
        type: "cloze",
        text: "Wir geben Ihnen jetzt zunächst ein Mittel gegen das ___ und beginnen mit einer Antibiotikatherapie.",
        options: ["Fieber", "Wetter", "Heimweh", "Gewicht"],
        answerIndex: 0,
        explanation: "Symptomatische und kausale Therapie sollten dem Patienten klar getrennt erklärt werden."
      },
      {
        type: "vocab",
        term: "die Isolationspflicht",
        definition: "isolation requirement — for certain contagious infections",
        example: "Bei diesem Erreger müssen wir Sie leider vorübergehend isolieren, um andere Patienten zu schützen."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient die Notwendigkeit der stationären Aufnahme verstanden hat?",
        options: [
          "Habe ich verständlich erklärt, warum eine stationäre Behandlung jetzt notwendig ist? Haben Sie noch Fragen?",
          "Sie bleiben jetzt hier, fertig.",
          "Alles klar, oder?",
          "Kein weiterer Kommentar."
        ],
        answerIndex: 0,
        explanation: "Gerade bei einschneidenden Entscheidungen wie einer stationären Aufnahme ist eine offene Rückfrage wichtig."
      }
    ]
  },

  {
    id: "an-schwindel-synkope",
    part: "anamnese",
    topic: "Neurologie/Kardiologie",
    title: "Schwindel & Synkope",
    description: "Anamnese bei Schwindel und kurzzeitiger Bewusstlosigkeit inklusive Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach der Art des Schwindels?",
        options: ["Ist Ihnen eher schwarz vor Augen geworden, oder hat sich die Umgebung gedreht?", "Schwindelt Ihnen oft?", "Wo wohnen Sie?", "Haben Sie Kopfschmerzen?"],
        answerIndex: 0,
        explanation: "Die Unterscheidung zwischen Präsynkope (Schwarzwerden) und Drehschwindel lenkt die weitere Diagnostik."
      },
      {
        type: "vocab",
        term: "der Drehschwindel",
        definition: "vertigo — sensation that the surroundings are spinning, typically vestibular in origin",
        example: "Dreht sich die Umgebung um Sie, oder haben Sie eher das Gefühl, gleich umzukippen?"
      },
      {
        type: "cloze",
        text: "Kam es beim Schwindel auch zu einem kurzen ___?",
        options: ["Bewusstseinsverlust", "Hautausschlag", "Juckreiz", "Sodbrennen"],
        answerIndex: 0,
        explanation: "Die Unterscheidung Synkope vs. Präsynkope ist zentral für die weitere Abklärung."
      },
      {
        type: "mc",
        question: "Welche Frage prüft einen möglichen kardialen Auslöser der Synkope?",
        options: ["Hatten Sie beim Umkippen Herzrasen oder einen unregelmäßigen Herzschlag gespürt?", "Haben Sie oft Kopfschmerzen?", "Essen Sie gerne süß?", "Reisen Sie oft?"],
        answerIndex: 0,
        explanation: "Palpitationen vor einer Synkope erhöhen den Verdacht auf eine kardiale (rhythmogene) Ursache."
      },
      {
        type: "vocab",
        term: "die orthostatische Hypotonie",
        definition: "orthostatic hypotension — a drop in blood pressure upon standing, a common cause of dizziness",
        example: "Wird Ihnen beim schnellen Aufstehen schwarz vor Augen?"
      },
      {
        type: "cloze",
        text: "Ist der Schwindel abhängig von der ___, zum Beispiel beim Drehen im Bett?",
        options: ["Kopfposition", "Tageszeit", "Kleidung", "Ernährung"],
        answerIndex: 0,
        explanation: "Lagerungsabhängiger Schwindel ist typisch für den benignen paroxysmalen Lagerungsschwindel."
      },
      {
        type: "mc",
        question: "Ein 75-jähriger Patient mit plötzlicher Synkope ohne Vorwarnung und unregelmäßigem Puls. Woran denken Sie zuerst?",
        options: ["Kardiale Synkope (Rhythmusstörung)", "Vasovagale Synkope", "Migräne", "Angststörung"],
        answerIndex: 0,
        explanation: "Synkope ohne Vorwarnzeichen (Prodromi) und unregelmäßiger Puls sprechen für eine kardiale, rhythmogene Ursache."
      },
      {
        type: "vocab",
        term: "die Prodromi",
        definition: "prodromal symptoms preceding syncope (e.g. sweating, nausea) — typical for vasovagal syncope, often absent in cardiac syncope",
        example: "Hatten Sie vor dem Umkippen Warnzeichen wie Übelkeit oder Schwitzen?"
      },
      {
        type: "cloze",
        text: "Nehmen Sie Medikamente ein, die Ihren Blutdruck ___ könnten?",
        options: ["senken", "färben", "süßen", "wärmen"],
        answerIndex: 0,
        explanation: "Eine Medikamentenanamnese (z. B. Antihypertensiva) ist bei orthostatischem Schwindel wichtig."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum Sie ein EKG und einen Schellong-Test durchführen möchten?",
        options: [
          "Wir möchten herausfinden, ob Ihr Herzrhythmus oder Ihr Blutdruck beim Aufstehen die Ursache für den Schwindel ist. Dafür machen wir ein EKG und prüfen Ihren Blutdruck im Stehen und Liegen.",
          "Das ist nur Routine.",
          "Sie haben sicher ein Herzproblem.",
          "Dazu sage ich später etwas."
        ],
        answerIndex: 0,
        explanation: "Der Zweck der Untersuchungen sollte dem Patienten verständlich und konkret erklärt werden."
      },
      {
        type: "cloze",
        text: "Bitte stehen Sie jetzt langsam auf, während wir Ihren ___ messen.",
        options: ["Blutdruck", "Gewicht", "Zuckerwert", "Sehvermögen"],
        answerIndex: 0,
        explanation: "Die Anleitung für den Schellong-Test sollte einfach und klar formuliert sein."
      },
      {
        type: "vocab",
        term: "der Schellong-Test",
        definition: "tilt/stand test used to diagnose orthostatic hypotension",
        example: "Wir führen jetzt einen Schellong-Test durch, um Ihren Blutdruck im Liegen und Stehen zu vergleichen."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie am Ende, ob der Patient die Ursache des Schwindels verstanden hat?",
        options: ["Ist Ihnen klar geworden, wodurch der Schwindel wahrscheinlich ausgelöst wird? Haben Sie noch Fragen?", "Alles klar?", "Verstanden, oder?", "Kein Kommentar nötig."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage stellt sicher, dass der Patient die Erklärung wirklich verstanden hat."
      }
    ]
  },
  {
    id: "an-rueckenschmerzen",
    part: "anamnese",
    topic: "Orthopädie",
    title: "Rückenschmerzen",
    description: "Anamnese bei Rückenschmerz inklusive Warnzeichen (Red Flags) und Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach der Lokalisation der Rückenschmerzen?",
        options: ["Schmerzt es eher im unteren Rücken, oder strahlt der Schmerz ins Bein aus?", "Haben Sie oft Rückenschmerzen?", "Wo wohnen Sie?", "Sind Sie sportlich aktiv?"],
        answerIndex: 0,
        explanation: "Die Unterscheidung zwischen lokalem und ausstrahlendem Schmerz ist diagnostisch wegweisend."
      },
      {
        type: "vocab",
        term: "die Ischialgie",
        definition: "sciatica — pain radiating along the sciatic nerve, typically into the leg",
        example: "Strahlt der Schmerz vom Rücken bis ins Bein aus (Ischialgie)?"
      },
      {
        type: "cloze",
        text: "Haben Sie zusätzlich zu den Rückenschmerzen auch ___ bemerkt?",
        options: ["Taubheitsgefühl oder Kraftverlust im Bein", "Juckreiz am Arm", "Halsschmerzen", "Sodbrennen"],
        answerIndex: 0,
        explanation: "Neurologische Begleitsymptome sind wichtige Warnzeichen, die aktiv erfragt werden müssen."
      },
      {
        type: "mc",
        question: "Welche Frage prüft ein Warnzeichen (Red Flag) für ein Kaudasyndrom?",
        options: ["Haben Sie Probleme beim Wasserlassen oder ein Taubheitsgefühl im Bereich des Gesäßes bemerkt?", "Haben Sie Rückenschmerzen beim Sitzen?", "Schlafen Sie gut?", "Sind Sie beruflich viel im Sitzen?"],
        answerIndex: 0,
        explanation: "Blasenstörung und Reithosenanästhesie sind Alarmzeichen für ein akutes Kaudasyndrom."
      },
      {
        type: "vocab",
        term: "die Reithosenanästhesie",
        definition: "saddle anesthesia — numbness in the perineal/buttock area, a red flag for cauda equina syndrome",
        example: "Eine Reithosenanästhesie in Kombination mit Blasenstörung ist ein akuter Notfall."
      },
      {
        type: "cloze",
        text: "Verschlimmert sich der Schmerz eher beim ___?",
        options: ["Husten oder Pressen", "Sitzen im Sessel", "Sprechen", "Liegen im Bett"],
        answerIndex: 0,
        explanation: "Verschlimmerung durch Husten/Pressen deutet auf eine radikuläre Ursache hin."
      },
      {
        type: "mc",
        question: "Ein 70-jähriger Patient mit neu aufgetretenen Rückenschmerzen, ungewolltem Gewichtsverlust und bekanntem Prostatakarzinom. Woran denken Sie zuerst?",
        options: ["Ossäre Metastasen", "Bandscheibenvorfall", "Muskelverspannung", "Nierensteine"],
        answerIndex: 0,
        explanation: "Tumoranamnese und Gewichtsverlust bei neuen Rückenschmerzen sind klassische Red Flags für Malignität."
      },
      {
        type: "vocab",
        term: "der Bandscheibenvorfall",
        definition: "herniated disc",
        example: "Ein Bandscheibenvorfall kann auf eine Nervenwurzel drücken und Schmerzen ins Bein verursachen."
      },
      {
        type: "cloze",
        text: "Haben Sie in letzter Zeit ungewollt an ___ verloren?",
        options: ["Gewicht", "Größe", "Kraft im Arm", "Sehschärfe"],
        answerIndex: 0,
        explanation: "Ungewollter Gewichtsverlust ist ein Warnzeichen, das an eine ernstere Ursache denken lassen muss."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum Sie bei diesen Warnzeichen ein MRT veranlassen?",
        options: [
          "Bei Ihren Beschwerden möchten wir sicherheitshalber mittels MRT prüfen, ob eine Nervenwurzel eingeengt ist oder eine andere ernste Ursache vorliegt.",
          "Das ist nur Routine bei Rückenschmerzen.",
          "Sie haben sicher einen Bandscheibenvorfall.",
          "Dazu später mehr."
        ],
        answerIndex: 0,
        explanation: "Den Grund für eine weiterführende Bildgebung ruhig und verständlich zu erklären, nimmt Angst."
      },
      {
        type: "cloze",
        text: "Bei anhaltender Taubheit oder Kraftverlust sollten Sie sich sofort wieder ___.",
        options: ["vorstellen", "hinlegen", "ausruhen", "aufwärmen"],
        answerIndex: 0,
        explanation: "Klare Sicherheitsempfehlungen (Safety-Netting) gehören zu einer guten Patientenaufklärung."
      },
      {
        type: "vocab",
        term: "die Warnzeichen (Red Flags)",
        definition: "red flags — alarming features requiring urgent further workup",
        example: "Bei Rückenschmerzen mit Red Flags wie Blasenstörung ist eine sofortige Bildgebung notwendig."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient die Warnzeichen versteht, auf die er achten soll?",
        options: ["Wissen Sie, worauf Sie achten sollten und wann Sie sich sofort wieder vorstellen sollten?", "Alles klar, oder?", "Sie wissen das schon.", "Kein weiterer Kommentar."],
        answerIndex: 0,
        explanation: "Gerade bei potenziell dringlichen Warnzeichen sollte aktiv nach dem Verständnis gefragt werden."
      }
    ]
  },
  {
    id: "an-gelenkschmerzen",
    part: "anamnese",
    topic: "Rheumatologie",
    title: "Gelenkschmerzen",
    description: "Anamnese bei akuten und chronischen Gelenkschmerzen inklusive Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach der Anzahl betroffener Gelenke?",
        options: ["Ist nur ein Gelenk betroffen, oder schmerzen mehrere Gelenke gleichzeitig?", "Haben Sie oft Gelenkschmerzen?", "Welches Gelenk mögen Sie am liebsten?", "Sind Sie sportlich aktiv?"],
        answerIndex: 0,
        explanation: "Mono- vs. Polyarthritis ist eine zentrale erste Weichenstellung in der Differenzialdiagnose."
      },
      {
        type: "vocab",
        term: "die Monarthritis",
        definition: "monoarthritis — inflammation of a single joint",
        example: "Eine akute Monarthritis des Großzehengrundgelenks ist typisch für einen Gichtanfall."
      },
      {
        type: "cloze",
        text: "Ist das Gelenk ___, gerötet und überwärmt?",
        options: ["geschwollen", "kalt", "blass", "unbeweglich"],
        answerIndex: 0,
        explanation: "Schwellung, Rötung und Überwärmung sind klassische Entzündungszeichen eines Gelenks."
      },
      {
        type: "mc",
        question: "Welche Frage prüft gezielt auf eine mögliche Gicht?",
        options: ["Hatten Sie schon einmal einen plötzlichen, sehr starken Schmerz im Großzehengrundgelenk?", "Essen Sie gerne Gemüse?", "Haben Sie Kopfschmerzen?", "Sind Sie oft im Urlaub?"],
        answerIndex: 0,
        explanation: "Der plötzliche, starke Schmerz im Großzehengrundgelenk ist die klassische Präsentation eines Gichtanfalls."
      },
      {
        type: "vocab",
        term: "die Morgensteifigkeit",
        definition: "morning stiffness — a key symptom in inflammatory arthritis such as rheumatoid arthritis",
        example: "Wie lange dauert die Morgensteifigkeit der Gelenke nach dem Aufwachen an?"
      },
      {
        type: "cloze",
        text: "Dauert die Morgensteifigkeit länger als eine ___ an?",
        options: ["Stunde", "Minute", "Woche", "Sekunde"],
        answerIndex: 0,
        explanation: "Morgensteifigkeit über eine Stunde spricht für eine entzündliche (z. B. rheumatoide) Genese."
      },
      {
        type: "mc",
        question: "Ein 45-jähriger Patient mit symmetrischer Schwellung der Fingergrundgelenke beidseits und Morgensteifigkeit über zwei Stunden. Woran denken Sie zuerst?",
        options: ["Rheumatoide Arthritis", "Gicht", "Arthrose", "Muskelkater"],
        answerIndex: 0,
        explanation: "Symmetrische Polyarthritis mit langer Morgensteifigkeit ist typisch für eine rheumatoide Arthritis."
      },
      {
        type: "vocab",
        term: "die Arthrose",
        definition: "osteoarthritis — degenerative joint disease",
        example: "Im Gegensatz zur rheumatoiden Arthritis verschlimmert sich die Arthrose typischerweise im Tagesverlauf."
      },
      {
        type: "cloze",
        text: "Gibt es in Ihrer Familie weitere Fälle von ___ oder anderen Autoimmunerkrankungen?",
        options: ["rheumatoider Arthritis", "Migräne", "Heuschnupfen", "Muskelkater"],
        answerIndex: 0,
        explanation: "Die Familienanamnese ist bei Verdacht auf eine Autoimmunerkrankung relevant."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich den Verdacht auf eine rheumatoide Arthritis?",
        options: [
          "Die Beschwerden und Blutwerte sprechen für eine Gelenkentzündung, die wir rheumatoide Arthritis nennen. Wir möchten Sie deshalb einem Rheumatologen vorstellen.",
          "Sie haben Rheuma, das ist schlimm.",
          "Das ist nur Verschleiß, kein Grund zur Sorge.",
          "Dazu später mehr."
        ],
        answerIndex: 0,
        explanation: "Die Diagnose sollte verständlich benannt und das weitere Vorgehen konkret erklärt werden."
      },
      {
        type: "cloze",
        text: "Eine frühzeitige Behandlung kann helfen, ___ der Gelenke zu verhindern.",
        options: ["bleibende Schäden", "Muskelkater", "Sonnenbrand", "Erkältungen"],
        answerIndex: 0,
        explanation: "Die Bedeutung einer frühzeitigen Therapie sollte dem Patienten verständlich vermittelt werden."
      },
      {
        type: "vocab",
        term: "der Rheumafaktor",
        definition: "rheumatoid factor — an antibody often (but not always) present in rheumatoid arthritis",
        example: "Wir bestimmen zusätzlich den Rheumafaktor und die Anti-CCP-Antikörper."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient die Überweisung zum Rheumatologen verstanden hat?",
        options: ["Ist Ihnen klar, warum eine fachärztliche Mitbetreuung jetzt sinnvoll ist? Haben Sie noch Fragen?", "Alles klar, oder?", "Sie gehen jetzt einfach dorthin.", "Kein weiterer Kommentar."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage stellt sicher, dass der Patient den Sinn der Überweisung verstanden hat."
      }
    ]
  },

  {
    id: "an-oedeme-herzinsuffizienz",
    part: "anamnese",
    topic: "Kardiologie",
    title: "Ödeme & Herzinsuffizienz",
    description: "Anamnese bei Beinödemen und Verdacht auf Herzinsuffizienz inklusive Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach der Lokalisation der Ödeme?",
        options: ["Schwellen eher die Beine, oder haben Sie auch einen dicken Bauch bemerkt?", "Haben Sie oft geschwollene Füße?", "Wo wohnen Sie?", "Essen Sie viel Salz?"],
        answerIndex: 0,
        explanation: "Die Lokalisation der Ödeme (Beine vs. Bauch/Aszites) hilft, den Schweregrad der Herzinsuffizienz einzuschätzen."
      },
      {
        type: "vocab",
        term: "die Beinödeme",
        definition: "leg edema",
        example: "Schwellen Ihre Beine eher morgens oder abends stärker an?"
      },
      {
        type: "cloze",
        text: "Müssen Sie nachts mit mehreren ___ schlafen, weil Sie sonst schlecht Luft bekommen?",
        options: ["Kissen", "Decken", "Fenstern", "Lichtern"],
        answerIndex: 0,
        explanation: "Das Schlafen mit erhöhtem Oberkörper ist ein typisches Zeichen der Orthopnoe bei Herzinsuffizienz."
      },
      {
        type: "mc",
        question: "Welche Frage prüft eine mögliche Gewichtszunahme durch Wassereinlagerung?",
        options: ["Haben Sie in den letzten Tagen ungewöhnlich schnell an Gewicht zugenommen?", "Essen Sie viel?", "Wiegen Sie sich oft?", "Machen Sie Sport?"],
        answerIndex: 0,
        explanation: "Rasche Gewichtszunahme ist ein sensitives Zeichen für eine Flüssigkeitsretention bei Herzinsuffizienz."
      },
      {
        type: "vocab",
        term: "die paroxysmale nächtliche Dyspnoe",
        definition: "paroxysmal nocturnal dyspnea — sudden breathlessness waking the patient at night, a hallmark of heart failure",
        example: "Wachen Sie nachts plötzlich mit starker Atemnot auf?"
      },
      {
        type: "cloze",
        text: "Wie viele Kissen benutzen Sie zum Schlafen, um besser ___ zu können?",
        options: ["atmen", "hören", "sehen", "schmecken"],
        answerIndex: 0,
        explanation: "Die Anzahl der benötigten Kissen quantifiziert die Orthopnoe."
      },
      {
        type: "mc",
        question: "Ein 68-jähriger Patient mit progredienten Beinödemen, Gewichtszunahme und Belastungsdyspnoe. Woran denken Sie zuerst?",
        options: ["Herzinsuffizienz", "Nierensteine", "Migräne", "Muskelkater"],
        answerIndex: 0,
        explanation: "Die Symptomtrias aus Ödemen, Gewichtszunahme und Belastungsdyspnoe ist klassisch für eine Herzinsuffizienz."
      },
      {
        type: "vocab",
        term: "die Herzinsuffizienz",
        definition: "heart failure",
        example: "Die Symptomtrias aus Ödemen, Gewichtszunahme und Belastungsdyspnoe spricht für eine Herzinsuffizienz."
      },
      {
        type: "cloze",
        text: "Nehmen Sie Ihre Medikamente, insbesondere ___, regelmäßig ein?",
        options: ["die Wassertabletten", "die Vitamine", "die Schmerzmittel", "die Hustensäfte"],
        answerIndex: 0,
        explanation: "Die Compliance bei der Diuretikaeinnahme ist entscheidend für die Symptomkontrolle."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum er täglich sein Gewicht kontrollieren soll?",
        options: [
          "Eine schnelle Gewichtszunahme kann bedeuten, dass sich wieder Wasser im Körper einlagert. Deshalb bitten wir Sie, sich täglich zu wiegen und uns bei starker Zunahme zu informieren.",
          "Wiegen ist einfach gut für die Gesundheit.",
          "Das ist nicht so wichtig.",
          "Dazu später mehr."
        ],
        answerIndex: 0,
        explanation: "Der Grund für die tägliche Gewichtskontrolle sollte konkret und verständlich erklärt werden."
      },
      {
        type: "cloze",
        text: "Bitte reduzieren Sie Ihren ___-Konsum, um weniger Wasser einzulagern.",
        options: ["Salz", "Zucker", "Kaffee", "Alkohol"],
        answerIndex: 0,
        explanation: "Eine salzarme Ernährung ist ein wichtiger Baustein der Herzinsuffizienzbehandlung."
      },
      {
        type: "vocab",
        term: "die Diuretika",
        definition: "diuretics — medications that help the body eliminate excess fluid",
        example: "Wir passen die Dosis Ihrer Diuretika an, um die Wassereinlagerung besser zu kontrollieren."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient die Bedeutung der täglichen Gewichtskontrolle verstanden hat?",
        options: ["Ist Ihnen klar, warum das tägliche Wiegen wichtig ist, und wissen Sie, wann Sie uns informieren sollten?", "Alles klar, oder?", "Wiegen Sie sich einfach.", "Kein weiterer Kommentar."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage stellt sicher, dass der Patient die praktische Bedeutung verstanden hat."
      }
    ]
  },
  {
    id: "an-hypertonie",
    part: "anamnese",
    topic: "Kardiologie",
    title: "Hypertonie",
    description: "Anamnese bei Bluthochdruck inklusive hypertensivem Notfall und Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach der Dauer der bekannten Hypertonie?",
        options: ["Seit wann ist bei Ihnen ein hoher Blutdruck bekannt?", "Haben Sie oft hohen Blutdruck?", "Messen Sie gerne Ihren Puls?", "Wie alt sind Sie?"],
        answerIndex: 0,
        explanation: "Die Dauer der bekannten Hypertonie ist relevant für das Risiko von Endorganschäden."
      },
      {
        type: "vocab",
        term: "der Bluthochdruck",
        definition: "hypertension",
        example: "Seit wann ist bei Ihnen ein Bluthochdruck bekannt?"
      },
      {
        type: "cloze",
        text: "Messen Sie Ihren Blutdruck ___ zu Hause?",
        options: ["regelmäßig", "nur im Urlaub", "nur nachts", "nur beim Sport"],
        answerIndex: 0,
        explanation: "Regelmäßige häusliche Blutdruckmessung ist wichtig zur Beurteilung der Therapieeinstellung."
      },
      {
        type: "mc",
        question: "Welche Frage prüft mögliche Endorganschäden der Hypertonie?",
        options: ["Haben Sie Sehstörungen, Brustschmerzen oder Luftnot bemerkt?", "Haben Sie oft Kopfschmerzen?", "Schlafen Sie gut?", "Reisen Sie oft?"],
        answerIndex: 0,
        explanation: "Sehstörungen, Brustschmerzen und Luftnot können auf Endorganschäden (Auge, Herz, Lunge) hinweisen."
      },
      {
        type: "vocab",
        term: "die hypertensive Krise",
        definition: "hypertensive crisis — severely elevated blood pressure, potentially with organ damage",
        example: "Bei Werten über 180/120 mmHg mit Symptomen sprechen wir von einer hypertensiven Krise."
      },
      {
        type: "cloze",
        text: "Nehmen Sie Ihre blutdrucksenkenden Medikamente ___ ein?",
        options: ["regelmäßig", "nur bei Kopfschmerzen", "nie", "nur am Wochenende"],
        answerIndex: 0,
        explanation: "Die Therapietreue ist eine der häufigsten Ursachen für eine schlecht eingestellte Hypertonie."
      },
      {
        type: "mc",
        question: "Ein Patient mit Blutdruck 210/130 mmHg, Kopfschmerzen und Sehstörungen. Woran denken Sie zuerst?",
        options: ["Hypertensiver Notfall", "Migräne", "Erkältung", "Muskelkater"],
        answerIndex: 0,
        explanation: "Stark erhöhter Blutdruck mit Symptomen einer Endorganschädigung ist ein hypertensiver Notfall."
      },
      {
        type: "vocab",
        term: "der Zielorganschaden",
        definition: "end-organ damage — damage to organs such as the heart, kidneys, eyes, or brain caused by chronic hypertension",
        example: "Wir untersuchen gezielt auf Zeichen eines Zielorganschadens."
      },
      {
        type: "cloze",
        text: "Gibt es in Ihrer Familie weitere Fälle von ___ oder Herz-Kreislauf-Erkrankungen?",
        options: ["Bluthochdruck", "Migräne", "Heuschnupfen", "Muskelkater"],
        answerIndex: 0,
        explanation: "Die Familienanamnese ist bei essenzieller Hypertonie relevant, da eine genetische Komponente besteht."
      },
      {
        type: "mc",
        question: "Wie erklären Sie dem Patienten verständlich, warum eine gute Blutdruckeinstellung wichtig ist?",
        options: [
          "Ein dauerhaft hoher Blutdruck kann langfristig Herz, Nieren, Augen und Gehirn schädigen. Deshalb ist es wichtig, den Blutdruck gut einzustellen.",
          "Blutdruck ist nicht so wichtig.",
          "Das betrifft nur ältere Menschen.",
          "Dazu später mehr."
        ],
        answerIndex: 0,
        explanation: "Die langfristigen Folgen eines unbehandelten Bluthochdrucks sollten dem Patienten konkret erklärt werden."
      },
      {
        type: "cloze",
        text: "Wir passen Ihre Medikamente an und bitten Sie, den Blutdruck ___ zu dokumentieren.",
        options: ["zu Hause", "nur beim Arzt", "gar nicht", "nur im Krankenhaus"],
        answerIndex: 0,
        explanation: "Häusliche Blutdruckprotokolle unterstützen die Therapieanpassung."
      },
      {
        type: "vocab",
        term: "die Lebensstiländerung",
        definition: "lifestyle modification — e.g. reduced salt intake, exercise, weight loss",
        example: "Neben Medikamenten empfehlen wir eine Lebensstiländerung mit weniger Salz und mehr Bewegung."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob der Patient die Wichtigkeit der Therapietreue verstanden hat?",
        options: ["Ist Ihnen klar, warum die regelmäßige Einnahme so wichtig ist? Haben Sie noch Fragen dazu?", "Alles klar, oder?", "Nehmen Sie es einfach.", "Kein weiterer Kommentar."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage stellt sicher, dass der Patient die Bedeutung der Therapietreue verstanden hat."
      }
    ]
  },
  {
    id: "an-muedigkeit-anaemie",
    part: "anamnese",
    topic: "Hämatologie",
    title: "Müdigkeit & Anämie",
    description: "Anamnese bei chronischer Müdigkeit und Verdacht auf Anämie inklusive Patientenkommunikation.",
    pool: [
      {
        type: "mc",
        question: "Wie fragen Sie nach dem Verlauf der Müdigkeit?",
        options: ["Seit wann fühlen Sie sich ungewöhnlich müde und abgeschlagen?", "Schlafen Sie schlecht?", "Arbeiten Sie viel?", "Sind Sie gestresst?"],
        answerIndex: 0,
        explanation: "Der zeitliche Verlauf hilft, akute von chronischen Ursachen der Müdigkeit zu unterscheiden."
      },
      {
        type: "vocab",
        term: "die Abgeschlagenheit",
        definition: "fatigue / lack of energy",
        example: "Fühlen Sie sich zusätzlich zur Müdigkeit auch allgemein abgeschlagen?"
      },
      {
        type: "cloze",
        text: "Haben Sie zusätzlich zur Müdigkeit auch ___ bemerkt?",
        options: ["Blässe oder Atemnot bei Belastung", "Juckreiz am Arm", "Halsschmerzen", "Sodbrennen"],
        answerIndex: 0,
        explanation: "Blässe und Belastungsdyspnoe sind typische Begleitsymptome einer Anämie."
      },
      {
        type: "mc",
        question: "Welche Frage prüft mögliche Blutungsquellen als Ursache einer Anämie?",
        options: ["Haben Sie Blut im Stuhl bemerkt oder sehr starke Monatsblutungen?", "Essen Sie viel Fleisch?", "Trinken Sie viel Wasser?", "Sind Sie sportlich aktiv?"],
        answerIndex: 0,
        explanation: "Chronischer Blutverlust (gastrointestinal oder menstruell) ist die häufigste Ursache einer Eisenmangelanämie."
      },
      {
        type: "vocab",
        term: "die Blässe",
        definition: "pallor — pale skin/mucous membranes, a sign of anemia",
        example: "Ist Ihnen selbst eine Blässe der Haut oder der Lippen aufgefallen?"
      },
      {
        type: "cloze",
        text: "Ernähren Sie sich vegetarisch oder ___?",
        options: ["vegan", "gemischt", "reichlich", "unregelmäßig"],
        answerIndex: 0,
        explanation: "Die Ernährungsanamnese ist relevant, da vegane/vegetarische Ernährung das Risiko für Eisen- oder B12-Mangel erhöhen kann."
      },
      {
        type: "mc",
        question: "Eine 32-jährige Patientin mit Müdigkeit, Blässe und sehr starken Monatsblutungen. Woran denken Sie zuerst?",
        options: ["Eisenmangelanämie", "Hypothyreose", "Depression", "Migräne"],
        answerIndex: 0,
        explanation: "Starke Monatsblutungen sind eine häufige Ursache einer Eisenmangelanämie bei Frauen im gebärfähigen Alter."
      },
      {
        type: "vocab",
        term: "die Eisenmangelanämie",
        definition: "iron deficiency anemia — the most common type of anemia, often due to chronic blood loss",
        example: "Starke Monatsblutungen sind eine häufige Ursache einer Eisenmangelanämie."
      },
      {
        type: "cloze",
        text: "Nehmen Sie Medikamente ein, die das Blutungsrisiko ___ könnten, z. B. Blutverdünner?",
        options: ["erhöhen", "senken", "färben", "süßen"],
        answerIndex: 0,
        explanation: "Antikoagulanzien und Thrombozytenaggregationshemmer erhöhen das Risiko für okkulte Blutungen."
      },
      {
        type: "mc",
        question: "Wie erklären Sie der Patientin verständlich, warum Sie einen Eisenwert und eine Magen-Darm-Abklärung veranlassen?",
        options: [
          "Ihre Blutwerte deuten auf einen Eisenmangel hin. Um die Ursache zu finden, möchten wir zusätzlich den Magen-Darm-Trakt untersuchen.",
          "Sie sind einfach nur müde, das ist normal.",
          "Das ist bestimmt nichts Ernstes.",
          "Dazu später mehr."
        ],
        answerIndex: 0,
        explanation: "Der Zweck der weiterführenden Diagnostik sollte der Patientin klar und konkret erklärt werden."
      },
      {
        type: "cloze",
        text: "Wir möchten die Ursache Ihres Eisenmangels finden und nicht nur ___ verschreiben.",
        options: ["Eisentabletten", "Schmerzmittel", "Antibiotika", "Vitamine"],
        answerIndex: 0,
        explanation: "Es ist wichtig, die zugrunde liegende Ursache (z. B. eine Blutungsquelle) zu finden, statt nur die Anämie symptomatisch zu behandeln."
      },
      {
        type: "vocab",
        term: "die Substitution",
        definition: "substitution/supplementation (e.g. of iron or vitamin B12)",
        example: "Bei bestätigtem Eisenmangel beginnen wir mit einer oralen Substitution."
      },
      {
        type: "mc",
        question: "Wie prüfen Sie, ob die Patientin die weiteren Schritte verstanden hat?",
        options: ["Ist Ihnen klar, warum wir zusätzlich zur Eisengabe auch die Ursache abklären möchten? Haben Sie noch Fragen?", "Alles klar, oder?", "Nehmen Sie einfach die Tabletten.", "Kein weiterer Kommentar."],
        answerIndex: 0,
        explanation: "Eine offene Rückfrage stellt sicher, dass die Patientin den Zusammenhang zwischen Substitution und Ursachensuche verstanden hat."
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
    pool: [
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
    pool: [
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
    pool: [
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

  {
    id: "ab-dyspnoe",
    part: "arztbrief",
    topic: "Pneumologie",
    title: "Dyspnoe",
    description: "Formulierungen für den Arztbrief bei Atemnot / Verdacht auf Lungenembolie oder Pneumonie.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit einem Tag bestehender akuter ___ vor.",
        options: ["Luftnot", "Übelkeit", "Verstopfung", "Schwellung"],
        answerIndex: 0,
        explanation: "Klassischer Einleitungssatz mit Zeitangabe und Leitsymptom."
      },
      {
        type: "mc",
        question: "Welcher Satz beschreibt den Auskultationsbefund korrekt?",
        options: [
          "Auskultatorisch zeigten sich beidseits feuchte Rasselgeräusche basal.",
          "Die Lunge hat komische Geräusche gemacht.",
          "Er hat komisch geatmet.",
          "Lunge: schlecht."
        ],
        answerIndex: 0,
        explanation: "Formale, fachsprachliche Beschreibung von Auskultationsbefunden gehört zum Untersuchungsabschnitt."
      },
      {
        type: "vocab",
        term: "die Sättigung",
        definition: "(oxygen) saturation, as abbreviated in clinical documentation",
        example: "Sättigung unter Raumluft 91 %."
      },
      {
        type: "cloze",
        text: "Laborchemisch zeigte sich ein erhöhtes ___ bei Verdacht auf eine Lungenembolie.",
        options: ["D-Dimer", "Kalium", "Kreatinin", "Bilirubin"],
        answerIndex: 0,
        explanation: "D-Dimer ist ein sensitiver, aber unspezifischer Laborparameter bei Verdacht auf Lungenembolie."
      },
      {
        type: "mc",
        question: "Wie leiten Sie den radiologischen Befund korrekt ein?",
        options: [
          "Röntgen-Thorax: Nachweis eines Infiltrats basal rechts.",
          "Das Röntgenbild sah komisch aus.",
          "Lunge, Bild, komisch.",
          "Röntgen war da."
        ],
        answerIndex: 0,
        explanation: "Bildgebende Befunde werden mit Modalität und konkretem Befund knapp und fachsprachlich formuliert."
      },
      {
        type: "vocab",
        term: "das Infiltrat",
        definition: "infiltrate (e.g. on chest X-ray, suggesting pneumonia)",
        example: "Im Röntgen-Thorax zeigt sich ein neu aufgetretenes Infiltrat basal rechts."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine kalkulierte antibiotische Therapie bei Verdacht auf eine ambulant erworbene ___.",
        options: ["Pneumonie", "Migräne", "Gastritis", "Zystitis"],
        answerIndex: 0,
        explanation: "Die Therapieempfehlung sollte die vermutete Diagnose klar benennen."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die Sauerstofftherapie im Arztbrief?",
        options: [
          "Der Patient erhielt Sauerstoff über eine Nasenbrille mit 2 l/min.",
          "Er hat Sauerstoff bekommen, glaube ich.",
          "Sauerstoff: ja.",
          "Wir haben ihm etwas zum Atmen gegeben."
        ],
        answerIndex: 0,
        explanation: "Therapiemaßnahmen werden mit konkreter Dosierung/Applikationsform dokumentiert."
      },
      {
        type: "vocab",
        term: "die Verlegung",
        definition: "transfer (of a patient to another ward/hospital)",
        example: "Bei Verschlechterung empfehlen wir die Verlegung auf die Intensivstation."
      },
      {
        type: "cloze",
        text: "Zusammenfassend gehen wir am ehesten von einer ambulant erworbenen Pneumonie aus und leiten eine ___ Therapie ein.",
        options: ["antibiotische", "operative", "psychiatrische", "physiotherapeutische"],
        answerIndex: 0,
        explanation: "Die Zusammenfassung sollte Diagnose und Therapieansatz klar verknüpfen."
      },
      {
        type: "vocab",
        term: "die Blutgasanalyse (BGA)",
        definition: "arterial blood gas analysis",
        example: "Die Blutgasanalyse zeigte eine leichte Hypoxämie."
      }
    ]
  },
  {
    id: "ab-kopfschmerzen",
    part: "arztbrief",
    topic: "Neurologie",
    title: "Kopfschmerzen",
    description: "Formulierungen für den Arztbrief bei Kopfschmerz-Anamnese und Bildgebung.",
    pool: [
      {
        type: "cloze",
        text: "Die Patientin berichtete über seit zwei Stunden bestehende, plötzlich einsetzende, stärkste ___.",
        options: ["Kopfschmerzen", "Bauchschmerzen", "Rückenschmerzen", "Gelenkschmerzen"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz sollte Dauer, Beginn und Intensität des Leitsymptoms klar benennen."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie ein unauffälliges neurologisches Untersuchungsergebnis?",
        options: [
          "Der neurologische Untersuchungsbefund war unauffällig, insbesondere kein Meningismus.",
          "Neurologisch alles gut.",
          "Sie war neurologisch okay.",
          "Untersuchung: normal, denke ich."
        ],
        answerIndex: 0,
        explanation: "Auch unauffällige Befunde werden im Arztbrief mit relevanten Negativbefunden (hier: kein Meningismus) dokumentiert."
      },
      {
        type: "vocab",
        term: "der Meningismus",
        definition: "meningismus — clinical sign of meningeal irritation",
        example: "Kein Meningismus, keine fokal-neurologischen Defizite."
      },
      {
        type: "cloze",
        text: "Zum Ausschluss einer Blutung wurde eine native ___ des Schädels durchgeführt.",
        options: ["Computertomographie", "Ultraschalluntersuchung", "Röntgenaufnahme", "Blutabnahme"],
        answerIndex: 0,
        explanation: "Bei Verdacht auf Subarachnoidalblutung ist das native Schädel-CT die Erstuntersuchung."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie einen unauffälligen Bildgebungsbefund?",
        options: [
          "Die craniale Computertomographie zeigte keinen Hinweis auf eine intrakranielle Blutung.",
          "Das CT war okay.",
          "Nichts Schlimmes im Bild.",
          "CT: gut."
        ],
        answerIndex: 0,
        explanation: "Bildgebende Befunde werden mit konkretem Ausschluss/Nachweis formuliert."
      },
      {
        type: "vocab",
        term: "die Liquorpunktion",
        definition: "lumbar puncture (CSF analysis)",
        example: "Bei unauffälligem CT, aber weiterhin bestehendem Verdacht, wird eine Liquorpunktion empfohlen."
      },
      {
        type: "cloze",
        text: "Wir empfehlen bei rezidivierenden Attacken eine ___ Abklärung zum Ausschluss einer sekundären Ursache.",
        options: ["neurologische", "orthopädische", "dermatologische", "urologische"],
        answerIndex: 0,
        explanation: "Wiederkehrende, unklare Kopfschmerzen sollten fachärztlich neurologisch weiter abgeklärt werden."
      },
      {
        type: "mc",
        question: "Wie leiten Sie die Verdachtsdiagnose Migräne im Arztbrief ein?",
        options: [
          "Bei typischer Anamnese gehen wir von einer Migräne ohne Aura aus.",
          "Sie hat wohl Migräne.",
          "Migräne, denke ich.",
          "Kopfschmerz: Migräne, wahrscheinlich."
        ],
        answerIndex: 0,
        explanation: "Formelle Formulierung der Verdachtsdiagnose mit Bezug auf die Anamnese."
      },
      {
        type: "vocab",
        term: "die Red Flags",
        definition: "red flags — alarming features requiring urgent further workup",
        example: "Es fanden sich keine Red Flags wie Fieber, Nackensteifigkeit oder fokal-neurologische Defizite."
      },
      {
        type: "cloze",
        text: "Wir bitten um ambulante ___ zur Einleitung einer Migräneprophylaxe bei Bedarf.",
        options: ["Wiedervorstellung", "Kostenübernahme", "Terminabsage", "Einladung"],
        answerIndex: 0,
        explanation: "Der Arztbrief schließt häufig mit einer klaren Empfehlung zum weiteren Vorgehen."
      }
    ]
  },
  {
    id: "ab-fieber-infekt",
    part: "arztbrief",
    topic: "Infektiologie",
    title: "Fieber & Infektion",
    description: "Formulierungen für den Arztbrief bei Fieber unklarer Genese und Sepsis.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit drei Tagen bestehendem ___ unklarer Genese vor.",
        options: ["Fieber", "Ausschlag", "Schwindel", "Husten ohne Fieber"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt Dauer und Leitsymptom, hier ergänzt um „unklarer Genese“."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die Vitalparameter korrekt im Arztbrief?",
        options: [
          "Bei Aufnahme zeigten sich eine Tachykardie von 110/min sowie eine Hypotonie von 90/60 mmHg.",
          "Puls und Blutdruck waren nicht gut.",
          "Vitalwerte: schlecht.",
          "Er sah kreislaufmäßig komisch aus."
        ],
        answerIndex: 0,
        explanation: "Vitalparameter werden im Arztbrief immer mit konkreten Zahlenwerten dokumentiert."
      },
      {
        type: "vocab",
        term: "der qSOFA-Score",
        definition: "quick SOFA score — bedside tool to identify patients at risk of sepsis",
        example: "Anhand des qSOFA-Scores schätzen wir das Sepsisrisiko ein."
      },
      {
        type: "cloze",
        text: "Vor Beginn der antibiotischen Therapie wurden zwei ___ abgenommen.",
        options: ["Blutkulturen", "Urinproben", "Röntgenbilder", "Hautbiopsien"],
        answerIndex: 0,
        explanation: "Blutkulturen sollten möglichst vor der ersten Antibiotikagabe abgenommen werden."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den Verdacht auf eine Sepsis bei Fieber und Hypotonie?",
        options: [
          "Bei Fieber, Tachykardie und Hypotonie besteht der Verdacht auf eine Sepsis bei vermutetem urogenitalem Fokus.",
          "Er hat wohl eine schlimme Infektion.",
          "Sepsis, denke ich, keine Ahnung woher.",
          "Fieber: hoch, gefährlich."
        ],
        answerIndex: 0,
        explanation: "Die Verdachtsdiagnose sollte mit den zugrunde liegenden Befunden und, falls bekannt, dem vermuteten Fokus formuliert werden."
      },
      {
        type: "vocab",
        term: "der Fokus",
        definition: "focus (of infection) — the suspected source, e.g. urinary, respiratory",
        example: "Als Fokus der Infektion vermuten wir die ableitenden Harnwege."
      },
      {
        type: "cloze",
        text: "Wir leiteten umgehend eine kalkulierte, ___ antibiotische Therapie ein.",
        options: ["breit wirksame", "sehr milde", "homöopathische", "verzögerte"],
        answerIndex: 0,
        explanation: "Bei Sepsisverdacht wird initial breit (kalkuliert) antibiotisch behandelt, bis der Erreger bekannt ist."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die Aufnahme auf die Intensivstation im Arztbrief?",
        options: [
          "Bei Kreislaufinstabilität erfolgte die Aufnahme auf die Intensivstation zur weiteren Überwachung und Therapie.",
          "Er kam auf die Intensiv, weil es ihm schlecht ging.",
          "Intensivstation: notwendig.",
          "Wir haben ihn verlegt, war wohl nötig."
        ],
        answerIndex: 0,
        explanation: "Die Aufnahmeindikation sollte mit dem zugrunde liegenden klinischen Befund begründet werden."
      },
      {
        type: "vocab",
        term: "die Deeskalation",
        definition: "de-escalation — narrowing antibiotic therapy once the pathogen and sensitivity are known",
        example: "Nach Erregernachweis erfolgte eine Deeskalation der antibiotischen Therapie."
      },
      {
        type: "cloze",
        text: "Wir bitten um Verlaufskontrolle der Entzündungsparameter sowie um ___ bei erneutem Fieberanstieg.",
        options: ["Wiedervorstellung", "Terminabsage", "Zweitmeinung", "Kostenübernahme"],
        answerIndex: 0,
        explanation: "Der Arztbrief schließt mit einer klaren Handlungsempfehlung für die Nachsorge."
      }
    ]
  },

  {
    id: "ab-schwindel-synkope",
    part: "arztbrief",
    topic: "Neurologie/Kardiologie",
    title: "Schwindel & Synkope",
    description: "Formulierungen für den Arztbrief bei Synkope und Schwindelabklärung.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich nach einer kurzen ___ ohne Vorwarnung vor.",
        options: ["Synkope", "Übelkeit", "Schwellung", "Rötung"],
        answerIndex: 0,
        explanation: "Klassischer Einleitungssatz mit Leitsymptom und wichtigem Zusatzmerkmal (hier: ohne Prodromi)."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den Untersuchungsbefund bei unauffälliger neurologischer Untersuchung?",
        options: [
          "Neurologisch keine Auffälligkeiten, insbesondere keine fokalen Defizite.",
          "Neurologisch war alles gut.",
          "Er war neurologisch okay.",
          "Untersuchung: normal, glaube ich."
        ],
        answerIndex: 0,
        explanation: "Auch unauffällige Befunde werden mit relevanten Negativbefunden präzise dokumentiert."
      },
      {
        type: "vocab",
        term: "die Synkope",
        definition: "syncope — transient loss of consciousness due to reduced cerebral blood flow",
        example: "Anamnestisch berichtete der Patient über eine kurze Synkope beim Aufstehen."
      },
      {
        type: "cloze",
        text: "Im Langzeit-EKG zeigte sich kein Hinweis auf eine relevante ___.",
        options: ["Rhythmusstörung", "Anämie", "Infektion", "Fraktur"],
        answerIndex: 0,
        explanation: "Ein unauffälliges Langzeit-EKG wird als relevanter Negativbefund dokumentiert."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie ein positives Schellong-Testergebnis?",
        options: [
          "Der Schellong-Test zeigte einen Blutdruckabfall von 30 mmHg systolisch beim Aufstehen, vereinbar mit einer orthostatischen Hypotonie.",
          "Blutdruck ist beim Aufstehen gefallen, war wohl orthostatisch.",
          "Test war positiv.",
          "Blutdruck: schlecht im Stehen."
        ],
        answerIndex: 0,
        explanation: "Testergebnisse werden mit konkreten Zahlenwerten und der klinischen Einordnung dokumentiert."
      },
      {
        type: "vocab",
        term: "die Ätiologie",
        definition: "etiology — the cause of a condition",
        example: "Die genaue Ätiologie der Synkope bleibt trotz umfangreicher Diagnostik unklar."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine ambulante kardiologische ___ zur weiteren Rhythmusüberwachung.",
        options: ["Anbindung", "Einladung", "Rechnung", "Terminabsage"],
        answerIndex: 0,
        explanation: "Standardformulierung zur Empfehlung einer fachärztlichen Weiterbetreuung."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief bei unklarer Synkopenursache ab?",
        options: [
          "Bei weiterhin unklarer Genese empfehlen wir eine ambulante Langzeit-Rhythmusüberwachung sowie Wiedervorstellung bei Rezidiv.",
          "Ursache unklar, kein weiterer Plan.",
          "Mal schauen, was passiert.",
          "Er soll sich melden, falls nötig."
        ],
        answerIndex: 0,
        explanation: "Auch bei unklarer Ursache sollte der Arztbrief eine konkrete Handlungsempfehlung enthalten."
      },
      {
        type: "vocab",
        term: "der Event-Recorder",
        definition: "event recorder — a portable device to capture heart rhythm during symptomatic episodes",
        example: "Bei seltenen Episoden kann ein Event-Recorder über mehrere Wochen getragen werden."
      },
      {
        type: "cloze",
        text: "Wir bitten um Vorstellung beim Kardiologen zur ___ bei Verdacht auf eine rhythmogene Synkope.",
        options: ["weiteren Abklärung", "Terminabsage", "Kostenübernahme", "Zweitmeinung"],
        answerIndex: 0,
        explanation: "Standardformulierung zur Überweisung bei Verdacht auf eine kardiale Ursache."
      }
    ]
  },
  {
    id: "ab-rueckenschmerzen",
    part: "arztbrief",
    topic: "Orthopädie",
    title: "Rückenschmerzen",
    description: "Formulierungen für den Arztbrief bei Rückenschmerz und Bandscheibenvorfall.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit einer Woche bestehenden, in das rechte Bein ausstrahlenden ___ vor.",
        options: ["Rückenschmerzen", "Bauchschmerzen", "Kopfschmerzen", "Gelenkschmerzen"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt Dauer, Leitsymptom und Ausstrahlung."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie einen unauffälligen neurologischen Befund der unteren Extremität?",
        options: [
          "Motorik, Sensibilität und Reflexe der unteren Extremität waren seitengleich unauffällig.",
          "Beine waren okay.",
          "Neurologisch nichts Schlimmes.",
          "Untersuchung: normal, glaube ich."
        ],
        answerIndex: 0,
        explanation: "Der neurologische Befund wird strukturiert nach Motorik, Sensibilität und Reflexen dokumentiert."
      },
      {
        type: "vocab",
        term: "die Kaudasymptomatik",
        definition: "cauda equina syndrome features",
        example: "Bei fehlender Kaudasymptomatik wurde zunächst eine konservative Therapie eingeleitet."
      },
      {
        type: "cloze",
        text: "Im MRT der Lendenwirbelsäule zeigte sich ein ___ in Höhe LWK4/5 mit Wurzelkompression.",
        options: ["Bandscheibenvorfall", "Knochenbruch", "Tumor", "Abszess"],
        answerIndex: 0,
        explanation: "Bildgebende Befunde werden mit genauer Höhenangabe und Befund dokumentiert."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die eingeleitete Therapie bei unkompliziertem Bandscheibenvorfall?",
        options: [
          "Wir leiteten eine konservative Therapie mit Schmerzmitteln und Physiotherapie ein.",
          "Er hat Tabletten bekommen und soll sich schonen.",
          "Therapie: Schmerzmittel.",
          "Wir haben ihm was gegen Schmerzen gegeben."
        ],
        answerIndex: 0,
        explanation: "Die eingeleitete Therapie wird konkret benannt (Wirkstoffgruppe/Maßnahme)."
      },
      {
        type: "vocab",
        term: "die Wurzelkompression",
        definition: "nerve root compression",
        example: "Die Bildgebung zeigte eine Wurzelkompression auf Höhe L5."
      },
      {
        type: "cloze",
        text: "Bei Ausschluss von Red Flags empfehlen wir zunächst ein ___ Vorgehen.",
        options: ["konservatives", "operatives", "radiologisches", "psychiatrisches"],
        answerIndex: 0,
        explanation: "Ohne Warnzeichen ist bei einem unkomplizierten Bandscheibenvorfall zunächst konservatives Vorgehen Standard."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief ab, wenn eine Verschlechterung möglich ist?",
        options: [
          "Wir bitten um sofortige Wiedervorstellung bei neu auftretender Blasen- oder Mastdarmstörung.",
          "Er soll sich melden, falls was ist.",
          "Bei Problemen einfach kommen.",
          "Alles wird gut."
        ],
        answerIndex: 0,
        explanation: "Konkrete Warnzeichen für eine Wiedervorstellung gehören in den Abschluss des Arztbriefs."
      },
      {
        type: "vocab",
        term: "die Laminektomie",
        definition: "laminectomy — surgical procedure to relieve pressure on the spinal cord/nerve roots",
        example: "Bei ausgeprägter Wurzelkompression mit neurologischem Defizit kann eine Laminektomie notwendig werden."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine ambulante ___ zur Fortführung der Physiotherapie.",
        options: ["Anbindung", "Einladung", "Rechnung", "Terminabsage"],
        answerIndex: 0,
        explanation: "Standardformulierung zur Empfehlung einer ambulanten Weiterbehandlung."
      }
    ]
  },
  {
    id: "ab-gelenkschmerzen",
    part: "arztbrief",
    topic: "Rheumatologie",
    title: "Gelenkschmerzen",
    description: "Formulierungen für den Arztbrief bei Polyarthritis und Verdacht auf rheumatoide Arthritis.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit sechs Wochen bestehenden, symmetrischen ___ der Fingergrundgelenke vor.",
        options: ["Schwellungen", "Verletzungen", "Ausschlägen", "Verhärtungen"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt Dauer, Symmetrie und Lokalisation des Leitbefundes."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den Gelenkbefund korrekt?",
        options: [
          "Die Fingergrundgelenke II–IV waren beidseits geschwollen und druckschmerzhaft.",
          "Finger waren dick und taten weh.",
          "Gelenke: schlecht.",
          "Er hatte komische Finger."
        ],
        answerIndex: 0,
        explanation: "Gelenkbefunde werden mit genauer anatomischer Bezeichnung dokumentiert."
      },
      {
        type: "vocab",
        term: "die Synovitis",
        definition: "synovitis — inflammation of the joint lining",
        example: "Klinisch und sonographisch zeigte sich eine floride Synovitis der Fingergrundgelenke."
      },
      {
        type: "cloze",
        text: "Laborchemisch zeigten sich ein positiver ___ sowie erhöhte Anti-CCP-Antikörper.",
        options: ["Rheumafaktor", "Blutzucker", "Kreatinin", "Bilirubin"],
        answerIndex: 0,
        explanation: "Serologische Befunde werden mit dem konkreten Parameter benannt."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die Verdachtsdiagnose rheumatoide Arthritis im Arztbrief?",
        options: [
          "Bei typischer Klinik und Serologie gehen wir von einer rheumatoiden Arthritis aus.",
          "Sie hat wohl Rheuma.",
          "Rheuma, denke ich.",
          "Gelenke: Rheuma wahrscheinlich."
        ],
        answerIndex: 0,
        explanation: "Die Verdachtsdiagnose wird formell mit Bezug auf Klinik und Befunde formuliert."
      },
      {
        type: "vocab",
        term: "die Basistherapie",
        definition: "disease-modifying therapy (DMARD therapy) in rheumatoid arthritis",
        example: "Wir empfehlen den zeitnahen Beginn einer Basistherapie mit Methotrexat."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine zeitnahe Vorstellung beim ___ zur Einleitung einer Basistherapie.",
        options: ["Rheumatologen", "Dermatologen", "Urologen", "HNO-Arzt"],
        answerIndex: 0,
        explanation: "Die fachärztliche Weiterbetreuung sollte konkret benannt werden."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief ab?",
        options: [
          "Wir bitten um zeitnahe rheumatologische Anbindung sowie Wiedervorstellung bei Beschwerdezunahme.",
          "Sie soll zum Rheumatologen, irgendwann.",
          "Mal schauen.",
          "Alles wird gut."
        ],
        answerIndex: 0,
        explanation: "Der Abschluss sollte eine klare Handlungsempfehlung mit Zeitrahmen enthalten."
      },
      {
        type: "vocab",
        term: "die Gelenkpunktion",
        definition: "joint aspiration — removing fluid from a joint for diagnostic testing",
        example: "Bei Verdacht auf Gicht kann eine Gelenkpunktion mit Nachweis von Uratkristallen die Diagnose sichern."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf einen Gichtanfall behandeln wir zunächst mit ___ Medikamenten.",
        options: ["entzündungshemmenden", "antibiotischen", "blutdrucksenkenden", "blutzuckersenkenden"],
        answerIndex: 0,
        explanation: "Ein akuter Gichtanfall wird initial mit entzündungshemmenden Medikamenten behandelt."
      }
    ]
  },

  {
    id: "ab-oedeme-herzinsuffizienz",
    part: "arztbrief",
    topic: "Kardiologie",
    title: "Ödeme & Herzinsuffizienz",
    description: "Formulierungen für den Arztbrief bei dekompensierter Herzinsuffizienz.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit zwei Wochen progredienten ___ und Belastungsdyspnoe vor.",
        options: ["Beinödemen", "Kopfschmerzen", "Bauchschmerzen", "Gelenkschmerzen"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt Dauer, Verlauf und Leitsymptome."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den Untersuchungsbefund bei Beinödemen?",
        options: [
          "Es zeigten sich beidseits eindrückbare Unterschenkelödeme bis zur Mitte des Unterschenkels.",
          "Beine waren dick.",
          "Ödeme: ja, schlimm.",
          "Er hatte geschwollene Füße."
        ],
        answerIndex: 0,
        explanation: "Der Ödembefund wird mit Ausprägung (eindrückbar) und genauer Höhenangabe dokumentiert."
      },
      {
        type: "vocab",
        term: "das Unterschenkelödem",
        definition: "lower leg edema",
        example: "Es zeigten sich beidseits eindrückbare Unterschenkelödeme."
      },
      {
        type: "cloze",
        text: "Laborchemisch zeigte sich ein erhöhtes ___, vereinbar mit einer Herzinsuffizienz.",
        options: ["NT-proBNP", "Kreatinin", "Bilirubin", "Kalium"],
        answerIndex: 0,
        explanation: "NT-proBNP ist ein zentraler Laborparameter zur Bestätigung einer Herzinsuffizienz."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den echokardiographischen Befund?",
        options: [
          "Echokardiographisch zeigte sich eine deutlich eingeschränkte linksventrikuläre Ejektionsfraktion von 30 %.",
          "Das Herz war schwach im Ultraschall.",
          "Herz: schlecht.",
          "Ultraschall zeigte Probleme."
        ],
        answerIndex: 0,
        explanation: "Bildgebende Befunde werden mit konkreten Messwerten dokumentiert."
      },
      {
        type: "vocab",
        term: "die Ejektionsfraktion",
        definition: "ejection fraction — a measure of the heart's pumping efficiency",
        example: "Die linksventrikuläre Ejektionsfraktion betrug 30 %."
      },
      {
        type: "cloze",
        text: "Wir leiteten eine leitliniengerechte Herzinsuffizienztherapie mit ACE-Hemmer, Betablocker und ___ ein.",
        options: ["Diuretikum", "Antibiotikum", "Insulin", "Schmerzmittel"],
        answerIndex: 0,
        explanation: "Die leitliniengerechte Herzinsuffizienztherapie umfasst typischerweise diese Substanzklassen."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief ab?",
        options: [
          "Wir bitten um tägliche Gewichtskontrolle sowie Wiedervorstellung bei rascher Gewichtszunahme oder Verschlechterung der Symptomatik.",
          "Er soll sich wiegen, irgendwann.",
          "Mal schauen, wie es wird.",
          "Alles wird gut."
        ],
        answerIndex: 0,
        explanation: "Konkrete Selbstüberwachungsmaßnahmen und Warnzeichen gehören in den Abschluss des Arztbriefs."
      },
      {
        type: "vocab",
        term: "die Rekompensation",
        definition: "recompensation — restoring a patient with heart failure to a stable, fluid-balanced state",
        example: "Unter diuretischer Therapie kam es zu einer guten Rekompensation."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine ambulante kardiologische ___ zur Therapieoptimierung.",
        options: ["Anbindung", "Einladung", "Rechnung", "Terminabsage"],
        answerIndex: 0,
        explanation: "Standardformulierung zur Empfehlung einer fachärztlichen Weiterbetreuung."
      }
    ]
  },
  {
    id: "ab-hypertonie",
    part: "arztbrief",
    topic: "Kardiologie",
    title: "Hypertonie",
    description: "Formulierungen für den Arztbrief bei unzureichend eingestelltem Bluthochdruck.",
    pool: [
      {
        type: "cloze",
        text: "Der Patient stellte sich mit seit Jahren bekanntem, unzureichend eingestelltem ___ vor.",
        options: ["arteriellen Hypertonus", "Diabetes mellitus", "Asthma bronchiale", "Vorhofflimmern"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt die bekannte Vorerkrankung und ihren aktuellen Kontrollstatus."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die Blutdruckwerte bei Aufnahme?",
        options: [
          "Bei Aufnahme zeigte sich ein Blutdruck von 190/110 mmHg.",
          "Blutdruck war hoch.",
          "Er hatte Bluthochdruck, ziemlich schlimm.",
          "Werte: schlecht."
        ],
        answerIndex: 0,
        explanation: "Vitalparameter werden im Arztbrief immer mit konkreten Zahlenwerten dokumentiert."
      },
      {
        type: "vocab",
        term: "der Hypertonus",
        definition: "hypertension (formal medical documentation term)",
        example: "Anamnestisch ist ein arterieller Hypertonus seit zehn Jahren bekannt."
      },
      {
        type: "cloze",
        text: "Laborchemisch und funktionell zeigten sich keine Hinweise auf einen relevanten ___.",
        options: ["Zielorganschaden", "Infekt", "Tumor", "Bruch"],
        answerIndex: 0,
        explanation: "Auch unauffällige Befunde werden als relevante Negativbefunde dokumentiert."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die eingeleitete antihypertensive Therapie?",
        options: [
          "Wir leiteten eine antihypertensive Kombinationstherapie mit einem ACE-Hemmer und einem Diuretikum ein.",
          "Er hat jetzt Blutdrucktabletten bekommen.",
          "Therapie: Blutdruck runter.",
          "Wir haben was gegen den Druck gegeben."
        ],
        answerIndex: 0,
        explanation: "Die Therapie wird mit konkreten Substanzklassen benannt."
      },
      {
        type: "vocab",
        term: "die Kombinationstherapie",
        definition: "combination therapy — using two or more drug classes together",
        example: "Bei unzureichender Blutdruckkontrolle unter Monotherapie empfehlen wir eine Kombinationstherapie."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine regelmäßige häusliche ___ zur Therapiekontrolle.",
        options: ["Blutdruckmessung", "Blutzuckermessung", "Gewichtskontrolle", "Temperaturmessung"],
        answerIndex: 0,
        explanation: "Häusliche Blutdruckmessung ist Standard zur Verlaufsbeurteilung bei Hypertonie."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief ab?",
        options: [
          "Wir bitten um Wiedervorstellung in vier Wochen zur Therapiekontrolle und Anpassung der Medikation.",
          "Er soll wiederkommen, irgendwann.",
          "Mal schauen, wie der Druck wird.",
          "Alles wird gut."
        ],
        answerIndex: 0,
        explanation: "Ein konkreter Zeitrahmen für die Wiedervorstellung gehört in den Abschluss des Arztbriefs."
      },
      {
        type: "vocab",
        term: "die Therapieadhärenz",
        definition: "treatment adherence",
        example: "Wir besprachen ausführlich die Bedeutung einer guten Therapieadhärenz."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf eine sekundäre Hypertonieursache empfehlen wir eine ___ Abklärung.",
        options: ["endokrinologische", "dermatologische", "orthopädische", "HNO-ärztliche"],
        answerIndex: 0,
        explanation: "Sekundäre Hypertonieursachen (z. B. hormonell) werden endokrinologisch abgeklärt."
      }
    ]
  },
  {
    id: "ab-muedigkeit-anaemie",
    part: "arztbrief",
    topic: "Hämatologie",
    title: "Müdigkeit & Anämie",
    description: "Formulierungen für den Arztbrief bei Eisenmangelanämie.",
    pool: [
      {
        type: "cloze",
        text: "Die Patientin stellte sich mit seit Wochen bestehender ___ und Belastungsdyspnoe vor.",
        options: ["Müdigkeit", "Übelkeit", "Schwellung", "Rötung"],
        answerIndex: 0,
        explanation: "Der Einleitungssatz benennt Dauer und Leitsymptome."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie den klinischen Befund einer Blässe?",
        options: [
          "Klinisch zeigte sich eine deutliche Blässe der Haut und Schleimhäute.",
          "Sie sah blass aus.",
          "Blässe: ja.",
          "Haut war komisch hell."
        ],
        answerIndex: 0,
        explanation: "Klinische Befunde werden fachsprachlich und präzise formuliert."
      },
      {
        type: "vocab",
        term: "die Schleimhautblässe",
        definition: "pallor of the mucous membranes",
        example: "Klinisch zeigte sich eine deutliche Schleimhautblässe."
      },
      {
        type: "cloze",
        text: "Laborchemisch zeigte sich eine ___ mit erniedrigtem Ferritin, vereinbar mit einer Eisenmangelanämie.",
        options: ["mikrozytäre Anämie", "Leukozytose", "Thrombozytose", "Hyperglykämie"],
        answerIndex: 0,
        explanation: "Die mikrozytäre Anämie mit erniedrigtem Ferritin ist typisch für einen Eisenmangel."
      },
      {
        type: "mc",
        question: "Wie formulieren Sie die geplante weitere Diagnostik?",
        options: [
          "Zur Abklärung der Blutungsquelle empfehlen wir eine Gastro- und Koloskopie.",
          "Wir schauen mal in den Bauch rein.",
          "Magen und Darm werden untersucht, irgendwie.",
          "Diagnostik: Bauch."
        ],
        answerIndex: 0,
        explanation: "Die geplante Diagnostik wird mit konkreten Untersuchungsmethoden benannt."
      },
      {
        type: "vocab",
        term: "das Ferritin",
        definition: "ferritin — a protein that stores iron; low levels indicate iron deficiency",
        example: "Das erniedrigte Ferritin bestätigt die Eisenmangelanämie."
      },
      {
        type: "cloze",
        text: "Wir begannen eine orale Eisensubstitution und empfehlen eine Verlaufskontrolle des ___ in vier Wochen.",
        options: ["Blutbildes", "Blutzuckers", "Blutdrucks", "Körpergewichts"],
        answerIndex: 0,
        explanation: "Eine Verlaufskontrolle des Blutbildes prüft das Ansprechen der Eisensubstitution."
      },
      {
        type: "mc",
        question: "Wie schließen Sie den Arztbrief ab?",
        options: [
          "Wir bitten um Wiedervorstellung nach abgeschlossener gastroenterologischer Diagnostik zur Befundbesprechung.",
          "Sie soll wiederkommen, irgendwann.",
          "Mal schauen, wie es wird.",
          "Alles wird gut."
        ],
        answerIndex: 0,
        explanation: "Der Abschluss sollte eine klare Handlungsempfehlung mit Bezug auf die weitere Diagnostik enthalten."
      },
      {
        type: "vocab",
        term: "die Koloskopie",
        definition: "colonoscopy",
        example: "Zum Ausschluss einer gastrointestinalen Blutungsquelle wurde eine Koloskopie vereinbart."
      },
      {
        type: "cloze",
        text: "Wir empfehlen eine gynäkologische Mitbeurteilung bei Verdacht auf ___ als Blutungsursache.",
        options: ["Menorrhagie", "Migräne", "Hypertonie", "Diabetes"],
        answerIndex: 0,
        explanation: "Bei Frauen im gebärfähigen Alter sollte auch eine gynäkologische Blutungsursache berücksichtigt werden."
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
    pool: [
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
    pool: [
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
    pool: [
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
  },
  {
    id: "fg-dyspnoe",
    part: "fachgespraech",
    topic: "Pneumologie",
    title: "Dyspnoe",
    description: "Differenzialdiagnose und Vorgehen bei akuter und chronischer Atemnot.",
    pool: [
      {
        type: "mc",
        question: "Ein 68-jähriger Raucher mit progredienter Belastungsdyspnoe seit Monaten und Fassthorax. Wichtigste Verdachtsdiagnose?",
        options: ["COPD", "Erstmanifestation eines Asthma bronchiale", "Pneumothorax", "Panikattacke"],
        answerIndex: 0,
        explanation: "Langjähriger Raucherstatus, progrediente Belastungsdyspnoe und Fassthorax sind klassisch für eine COPD."
      },
      {
        type: "vocab",
        term: "die Exazerbation",
        definition: "exacerbation — acute worsening of a chronic condition such as COPD",
        example: "Der Patient stellt sich mit einer akuten Exazerbation seiner COPD vor."
      },
      {
        type: "mc",
        question: "Plötzliche Atemnot mit einseitig fehlendem Atemgeräusch bei einem jungen, schlanken Mann. Verdachtsdiagnose?",
        options: ["Spontanpneumothorax", "Lungenentzündung", "Herzinfarkt", "Magenschmerzen"],
        answerIndex: 0,
        explanation: "Junge, schlanke Männer sind eine typische Risikogruppe für einen Spontanpneumothorax."
      },
      {
        type: "cloze",
        text: "Zur weiteren Abklärung einer Lungenembolie bestimmen wir den ___ sowie eine CT-Angiographie.",
        options: ["D-Dimer-Wert", "HbA1c-Wert", "PSA-Wert", "TSH-Wert"],
        answerIndex: 0,
        explanation: "Ein erhöhter D-Dimer-Wert ist bei klinischem Verdacht ein Baustein zur weiteren Abklärung mittels CT-Angiographie."
      },
      {
        type: "vocab",
        term: "der Wells-Score",
        definition: "Wells score — clinical prediction rule estimating the probability of pulmonary embolism",
        example: "Anhand des Wells-Scores schätzen wir die Wahrscheinlichkeit einer Lungenembolie ein."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf eine ambulant erworbene Pneumonie am sinnvollsten?",
        options: ["Labor, Röntgen-Thorax, ggf. Sputumkultur", "Nur ein EKG", "Nur eine Urinuntersuchung", "Röntgen des Knies"],
        answerIndex: 0,
        explanation: "Labor, Röntgen-Thorax und ggf. Sputumkultur bilden die diagnostische Basis bei Verdacht auf Pneumonie."
      },
      {
        type: "cloze",
        text: "Bei stabilem Patienten mit leichter COPD-Exazerbation empfehlen wir zunächst eine ___ Therapie mit Bronchodilatatoren.",
        options: ["inhalative", "operative", "intravenöse", "psychotherapeutische"],
        answerIndex: 0,
        explanation: "Leichte COPD-Exazerbationen werden zunächst mit inhalativen Bronchodilatatoren behandelt."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Verdacht auf eine Lungenembolie professionell?",
        options: [
          "Aufgrund der akuten Dyspnoe, des Pleuraschmerzes und der Risikofaktoren gehe ich am ehesten von einer Lungenembolie aus.",
          "Ich glaube, es ist die Lunge.",
          "Vielleicht was mit der Lunge, bin unsicher.",
          "Der Patient bekommt keine Luft, keine Ahnung warum."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte, begründete Verdachtsdiagnose mit Bezug auf Befunde ist im Fachgespräch erwartet."
      },
      {
        type: "vocab",
        term: "die Risikostratifizierung",
        definition: "risk stratification",
        example: "Zur Risikostratifizierung nutzen wir den Wells-Score."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei akuter Dyspnoe mit Thoraxschmerz zusätzlich zur Lungenembolie nennen?",
        options: ["Akutes Koronarsyndrom und Pneumothorax", "Migräne und Sodbrennen", "Rückenschmerzen und Muskelkater", "Erkältung und Heuschnupfen"],
        answerIndex: 0,
        explanation: "Akutes Koronarsyndrom und Pneumothorax sind wichtige Differenzialdiagnosen bei akuter Dyspnoe mit Thoraxschmerz."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf eine schwere Exazerbation mit respiratorischer Erschöpfung sollte frühzeitig eine ___ erwogen werden.",
        options: ["nicht-invasive Beatmung", "Physiotherapie", "Diät", "Bettruhe zu Hause"],
        answerIndex: 0,
        explanation: "Bei drohender respiratorischer Erschöpfung ist eine frühzeitige nicht-invasive Beatmung entscheidend."
      },
      {
        type: "vocab",
        term: "die respiratorische Insuffizienz",
        definition: "respiratory failure",
        example: "Bei zunehmender Erschöpfung besteht das Risiko einer respiratorischen Insuffizienz."
      }
    ]
  },
  {
    id: "fg-kopfschmerzen",
    part: "fachgespraech",
    topic: "Neurologie",
    title: "Kopfschmerzen",
    description: "Differenzialdiagnose und Vorgehen bei akutem und chronischem Kopfschmerz.",
    pool: [
      {
        type: "mc",
        question: "Eine 40-jährige Patientin mit plötzlichem Vernichtungskopfschmerz und Nackensteifigkeit. Wichtigste Verdachtsdiagnose?",
        options: ["Subarachnoidalblutung", "Spannungskopfschmerz", "Migräne ohne Aura", "Clusterkopfschmerz"],
        answerIndex: 0,
        explanation: "Plötzlicher, stärkster Kopfschmerz mit Nackensteifigkeit ist hochverdächtig auf eine Subarachnoidalblutung."
      },
      {
        type: "vocab",
        term: "die Bildgebung",
        definition: "imaging — radiological workup",
        example: "Zur weiteren Abklärung veranlassen wir umgehend eine craniale Bildgebung."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf Subarachnoidalblutung am sinnvollsten?",
        options: ["Natives cCT, bei Unauffälligkeit ggf. Liquorpunktion", "Nur ein EKG", "Nur eine Blutzuckermessung", "Röntgen der Halswirbelsäule"],
        answerIndex: 0,
        explanation: "Bei klinischem Verdacht ist das native cCT die Erstuntersuchung, bei unauffälligem Befund ggf. ergänzt durch eine Liquorpunktion."
      },
      {
        type: "cloze",
        text: "Bei rezidivierenden, einseitigen, pulsierenden Kopfschmerzen mit Übelkeit denken wir am ehesten an eine ___.",
        options: ["Migräne", "Sinusitis", "Zahnschmerz", "Muskelverspannung"],
        answerIndex: 0,
        explanation: "Rezidivierender, einseitiger, pulsierender Kopfschmerz mit Übelkeit ist typisch für eine Migräne."
      },
      {
        type: "vocab",
        term: "die Anamnesedauer",
        definition: "duration of symptom history — a key factor distinguishing primary from secondary headache disorders",
        example: "Eine kurze Anamnesedauer mit plötzlichem Beginn spricht eher für eine sekundäre Kopfschmerzursache."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei Kopfschmerz mit Fieber und Nackensteifigkeit unbedingt nennen?",
        options: ["Meningitis", "Spannungskopfschmerz", "Migräne mit Aura", "Clusterkopfschmerz"],
        answerIndex: 0,
        explanation: "Fieber und Nackensteifigkeit zusammen mit Kopfschmerz sind hochverdächtig auf eine Meningitis und erfordern sofortiges Handeln."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf eine Meningitis sollte umgehend eine ___ Therapie begonnen werden, ohne auf alle Befunde zu warten.",
        options: ["antibiotische", "physiotherapeutische", "operative", "homöopathische"],
        answerIndex: 0,
        explanation: "Bei Meningitisverdacht darf die antibiotische Therapie nicht durch Diagnostik verzögert werden."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell gegenüber dem Oberarzt?",
        options: [
          "Aufgrund des plötzlichen Vernichtungskopfschmerzes mit Nackensteifigkeit gehe ich am ehesten von einer Subarachnoidalblutung aus und habe bereits ein cCT veranlasst.",
          "Sie hat Kopfschmerzen, keine Ahnung was es ist.",
          "Vielleicht Migräne, vielleicht was Schlimmeres.",
          "Kopfschmerz halt, wie immer."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Präsentation nennt Verdachtsdiagnose, Begründung und bereits eingeleitete Maßnahmen."
      },
      {
        type: "vocab",
        term: "die Verdachtsdiagnose",
        definition: "working/suspected diagnosis",
        example: "Unsere Verdachtsdiagnose lautet Subarachnoidalblutung bis zum Beweis des Gegenteils."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Differenzialdiagnosen kommen sonst noch infrage?“ Wie antworten Sie?",
        options: [
          "Neben der Subarachnoidalblutung denke ich auch an eine Meningitis oder eine Sinusvenenthrombose.",
          "Keine weiteren, bin mir sicher.",
          "Vielleicht Stress.",
          "Das habe ich nicht bedacht."
        ],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt die Hauptverdachtsdiagnose und mindestens eine plausible Alternative."
      }
    ]
  },
  {
    id: "fg-fieber-infekt",
    part: "fachgespraech",
    topic: "Infektiologie",
    title: "Fieber & Infektion",
    description: "Differenzialdiagnose und Vorgehen bei Fieber unklarer Genese und Sepsisverdacht.",
    pool: [
      {
        type: "mc",
        question: "Ein Patient mit Fieber, Tachykardie und niedrigem Blutdruck nach einer Harnwegsinfektion. Woran denken Sie zuerst?",
        options: ["Urosepsis", "Migräne", "Magenverstimmung", "Muskelkater"],
        answerIndex: 0,
        explanation: "Fieber, Tachykardie und Hypotonie nach einem Harnwegsinfekt sind typisch für eine Urosepsis."
      },
      {
        type: "vocab",
        term: "die Blutkultur",
        definition: "blood culture — test to identify bacteria/fungi in the blood",
        example: "Wir nehmen jetzt vor der ersten Antibiotikagabe zwei Blutkulturen ab."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf eine Sepsis am wichtigsten und dringlichsten?",
        options: [
          "Blutkulturen abnehmen und umgehend eine kalkulierte, breit wirksame Antibiotikatherapie beginnen",
          "Erst alle Bildgebung abwarten, dann behandeln",
          "Nur orale Schmerzmittel geben",
          "Den Patienten nach Hause schicken und beobachten"
        ],
        answerIndex: 0,
        explanation: "Bei Sepsisverdacht zählt jede Stunde — Blutkulturen abnehmen und sofort kalkuliert antibiotisch behandeln."
      },
      {
        type: "cloze",
        text: "Zur Risikoeinschätzung einer Sepsis am Patientenbett nutzen wir den ___.",
        options: ["qSOFA-Score", "Wells-Score", "Glasgow-Koma-Score", "Apgar-Score"],
        answerIndex: 0,
        explanation: "Der qSOFA-Score ist ein einfaches Bedside-Instrument zur Einschätzung des Sepsisrisikos."
      },
      {
        type: "vocab",
        term: "der Fokus",
        definition: "focus (of infection) — the suspected source, e.g. urinary or respiratory tract",
        example: "Als Fokus der Infektion vermuten wir die ableitenden Harnwege."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei Fieber unklarer Genese zusätzlich zur bakteriellen Infektion in Betracht ziehen?",
        options: ["Virale Infektion und autoimmune/entzündliche Erkrankungen", "Nur Migräne", "Nur Muskelkater", "Nur Zahnschmerzen"],
        answerIndex: 0,
        explanation: "Fieber unklarer Genese kann auch virale, autoimmune oder entzündliche (nicht-infektiöse) Ursachen haben."
      },
      {
        type: "cloze",
        text: "Bei fehlendem Ansprechen auf die initiale Therapie sollte die antibiotische Abdeckung anhand des ___ angepasst werden.",
        options: ["Erregernachweises", "Wetters", "Alters", "Körpergewichts allein"],
        answerIndex: 0,
        explanation: "Die Anpassung der Antibiotikatherapie erfolgt idealerweise gezielt nach Erreger- und Resistenznachweis."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell gegenüber dem Oberarzt?",
        options: [
          "Aufgrund von Fieber, Tachykardie und Hypotonie bei bekanntem Harnwegsinfekt gehe ich von einer Urosepsis aus und habe bereits Blutkulturen abgenommen und eine Antibiotikatherapie eingeleitet.",
          "Er hat halt Fieber, keine Ahnung wieso.",
          "Vielleicht was Ernstes, vielleicht nicht.",
          "Fieber halt, wie immer bei Infekten."
        ],
        answerIndex: 0,
        explanation: "Eine gute Fallpräsentation nennt Verdachtsdiagnose, Begründung und bereits eingeleitete Maßnahmen."
      },
      {
        type: "vocab",
        term: "die Deeskalation",
        definition: "de-escalation — narrowing antibiotic therapy once the pathogen and sensitivity are known",
        example: "Nach Erregernachweis erfolgte eine Deeskalation der antibiotischen Therapie."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Was wäre Ihr nächster Schritt bei ausbleibender Besserung nach 48 Stunden?“ Wie antworten Sie?",
        options: [
          "Ich würde die Blutkulturergebnisse erneut prüfen, die Bildgebung erweitern und die antibiotische Therapie gegebenenfalls anpassen.",
          "Ich würde einfach abwarten.",
          "Keine Ahnung, das wäre dann Ihr Problem.",
          "Wir könnten es einfach nochmal mit dem gleichen Antibiotikum versuchen."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Antwort zeigt, dass bei fehlendem Ansprechen systematisch reevaluiert wird (Diagnostik, Fokussuche, Therapieanpassung)."
      }
    ]
  },
  {
    id: "fg-schwindel-synkope",
    part: "fachgespraech",
    topic: "Neurologie/Kardiologie",
    title: "Schwindel & Synkope",
    description: "Differenzialdiagnose und Vorgehen bei Schwindel und Synkope.",
    pool: [
      {
        type: "mc",
        question: "Ein 75-jähriger Patient mit plötzlicher, kurzer Synkope ohne Prodromi und unregelmäßigem Puls. Wichtigste Verdachtsdiagnose?",
        options: ["Kardiale Synkope (Rhythmusstörung)", "Vasovagale Synkope", "Migräne", "Hypoglykämie"],
        answerIndex: 0,
        explanation: "Fehlende Prodromi und unregelmäßiger Puls sprechen für eine kardiale, rhythmogene Synkope."
      },
      {
        type: "vocab",
        term: "vasovagal",
        definition: "vasovagal — relating to a common, benign type of syncope triggered by e.g. pain, fear, or prolonged standing",
        example: "Vasovagale Synkopen treten häufig nach längerem Stehen oder starken Emotionen auf."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei unklarer Synkope am sinnvollsten?",
        options: ["EKG, Langzeit-EKG, Schellong-Test, ggf. Echokardiographie", "Nur ein Röntgen des Knies", "Nur eine Urinuntersuchung", "Nur eine Blutzuckermessung"],
        answerIndex: 0,
        explanation: "Eine strukturierte Stufendiagnostik aus EKG, Langzeit-EKG und Schellong-Test deckt die häufigsten Ursachen ab."
      },
      {
        type: "cloze",
        text: "Bei jungen Patienten ohne strukturelle Herzerkrankung ist die ___ Synkope die häufigste Ursache.",
        options: ["vasovagale", "kardiale", "zerebrale", "metabolische"],
        answerIndex: 0,
        explanation: "Die vasovagale Synkope ist bei jungen, herzgesunden Patienten die häufigste Ursache."
      },
      {
        type: "vocab",
        term: "die Prodromi",
        definition: "prodromal symptoms preceding syncope (e.g. sweating, nausea, tunnel vision) — typical for vasovagal syncope, often absent in cardiac syncope",
        example: "Das Fehlen von Prodromi spricht eher für eine kardiale Ursache der Synkope."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei Schwindel mit Drehsensation zusätzlich nennen?",
        options: ["Benigner paroxysmaler Lagerungsschwindel (BPLS)", "Migräne mit Aura", "Sodbrennen", "Muskelkater"],
        answerIndex: 0,
        explanation: "Lagerungsabhängiger Drehschwindel ist typisch für den benignen paroxysmalen Lagerungsschwindel."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf einen benignen paroxysmalen Lagerungsschwindel führen wir das ___-Manöver durch.",
        options: ["Dix-Hallpike", "Schellong", "Valsalva", "Romberg"],
        answerIndex: 0,
        explanation: "Das Dix-Hallpike-Manöver provoziert den typischen Nystagmus beim BPLS und sichert die Diagnose."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund der plötzlichen Synkope ohne Prodromi bei bekannter Herzrhythmusstörung gehe ich am ehesten von einer kardialen Synkope aus.",
          "Er ist einfach umgekippt, keine Ahnung wieso.",
          "Vielleicht Kreislauf, vielleicht Herz.",
          "Synkope halt, wie immer."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte, begründete Verdachtsdiagnose mit Bezug auf Anamnese und Vorerkrankungen ist im Fachgespräch erwartet."
      },
      {
        type: "vocab",
        term: "die kardiale Abklärung",
        definition: "cardiac workup",
        example: "Bei Verdacht auf eine kardiale Synkope ist eine rasche kardiale Abklärung notwendig."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Alarmzeichen sprechen für eine kardiale Ursache?“ Wie antworten Sie?",
        options: [
          "Synkope ohne Prodromi, während Belastung, mit Herzklopfen oder bei bekannter struktureller Herzerkrankung.",
          "Keine Ahnung, alle Synkopen sind gleich.",
          "Nur das Alter zählt.",
          "Es gibt keine Alarmzeichen."
        ],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt konkrete klinische Alarmzeichen für eine kardiale Genese."
      }
    ]
  },
  {
    id: "fg-rueckenschmerzen",
    part: "fachgespraech",
    topic: "Orthopädie",
    title: "Rückenschmerzen",
    description: "Differenzialdiagnose und Vorgehen bei Rückenschmerz mit und ohne Warnzeichen.",
    pool: [
      {
        type: "mc",
        question: "Ein 70-jähriger Patient mit neu aufgetretenen Rückenschmerzen, Gewichtsverlust und bekanntem Prostatakarzinom. Wichtigste Verdachtsdiagnose?",
        options: ["Ossäre Metastasen", "Lumbaler Bandscheibenvorfall", "Muskelverspannung", "Nierensteine"],
        answerIndex: 0,
        explanation: "Tumoranamnese und Gewichtsverlust bei neuen Rückenschmerzen sind hochverdächtig auf ossäre Metastasen."
      },
      {
        type: "vocab",
        term: "die ossäre Metastase",
        definition: "bone metastasis",
        example: "Bei bekanntem Prostatakarzinom denken wir differenzialdiagnostisch an ossäre Metastasen."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf ein Kaudasyndrom am dringlichsten?",
        options: ["Notfall-MRT und umgehende neurochirurgische Vorstellung", "Ambulante Physiotherapie", "Nur Schmerzmittel verschreiben", "Kontrolle in zwei Wochen"],
        answerIndex: 0,
        explanation: "Ein Kaudasyndrom ist ein neurochirurgischer Notfall und erfordert sofortiges Handeln."
      },
      {
        type: "cloze",
        text: "Ein Kaudasyndrom ist ein ___ und erfordert eine notfallmäßige Abklärung.",
        options: ["Notfall", "Zufallsbefund", "Spätsymptom", "Dauerzustand"],
        answerIndex: 0,
        explanation: "Ein Kaudasyndrom kann unbehandelt zu bleibenden neurologischen Schäden führen."
      },
      {
        type: "vocab",
        term: "die Spinalkanalstenose",
        definition: "spinal canal stenosis",
        example: "Bei älteren Patienten mit belastungsabhängigen Beinschmerzen denken wir auch an eine Spinalkanalstenose."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei akutem Rückenschmerz mit Fieber nennen?",
        options: ["Spondylodiszitis", "Muskelverspannung", "Nierensteine ohne Fieber", "Migräne"],
        answerIndex: 0,
        explanation: "Rückenschmerz mit Fieber sollte immer an eine Spondylodiszitis denken lassen."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf eine Spondylodiszitis bestimmen wir die Entzündungsparameter und veranlassen ein ___ der Wirbelsäule.",
        options: ["MRT", "Röntgen des Schädels", "EKG", "Ultraschall des Herzens"],
        answerIndex: 0,
        explanation: "Das MRT ist die sensitivste Untersuchung zum Nachweis einer Spondylodiszitis."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund der Red Flags Gewichtsverlust und bekannter Tumorerkrankung gehe ich differenzialdiagnostisch vorrangig von ossären Metastasen aus und habe ein MRT veranlasst.",
          "Rückenschmerzen halt, nichts Besonderes.",
          "Vielleicht nur Verspannung.",
          "Keine Ahnung, Rücken tut halt weh."
        ],
        answerIndex: 0,
        explanation: "Eine gute Fallpräsentation nennt Red Flags, Verdachtsdiagnose und bereits eingeleitete Maßnahmen."
      },
      {
        type: "vocab",
        term: "die Diszitis",
        definition: "discitis — infection of the intervertebral disc",
        example: "Fieber und Rückenschmerz zusammen sollten immer an eine Diszitis denken lassen."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Warnzeichen rechtfertigen eine notfallmäßige Bildgebung?“ Wie antworten Sie?",
        options: [
          "Neurologische Ausfälle, Blasen-/Mastdarmstörung, Fieber, Tumoranamnese oder Trauma.",
          "Nur starke Schmerzen zählen.",
          "Alter allein reicht.",
          "Es gibt keine klaren Warnzeichen."
        ],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt die etablierten Red Flags für Rückenschmerz vollständig."
      }
    ]
  },
  {
    id: "fg-gelenkschmerzen",
    part: "fachgespraech",
    topic: "Rheumatologie",
    title: "Gelenkschmerzen",
    description: "Differenzialdiagnose und Vorgehen bei akuter und chronischer Arthritis.",
    pool: [
      {
        type: "mc",
        question: "Ein 45-jähriger Patient mit symmetrischer Schwellung der Fingergrundgelenke und Morgensteifigkeit über zwei Stunden. Wichtigste Verdachtsdiagnose?",
        options: ["Rheumatoide Arthritis", "Gicht", "Arthrose", "Psoriasis-Arthritis"],
        answerIndex: 0,
        explanation: "Symmetrische Polyarthritis mit langer Morgensteifigkeit ist typisch für eine rheumatoide Arthritis."
      },
      {
        type: "vocab",
        term: "die Anti-CCP-Antikörper",
        definition: "anti-CCP antibodies — a highly specific marker for rheumatoid arthritis",
        example: "Positive Anti-CCP-Antikörper untermauern den Verdacht auf eine rheumatoide Arthritis."
      },
      {
        type: "mc",
        question: "Ein 55-jähriger Mann mit plötzlichem, sehr starkem Schmerz im Großzehengrundgelenk nach reichlichem Alkoholkonsum. Verdachtsdiagnose?",
        options: ["Gichtanfall", "Rheumatoide Arthritis", "Arthrose", "Reaktive Arthritis"],
        answerIndex: 0,
        explanation: "Plötzlicher, starker Schmerz im Großzehengrundgelenk nach Alkoholexzess ist klassisch für einen Gichtanfall."
      },
      {
        type: "cloze",
        text: "Zur Diagnosesicherung eines Gichtanfalls kann eine Gelenkpunktion mit Nachweis von ___ erfolgen.",
        options: ["Uratkristallen", "Bakterien", "Blutzellen", "Fettzellen"],
        answerIndex: 0,
        explanation: "Der Nachweis von Uratkristallen in der Gelenkflüssigkeit sichert die Diagnose Gicht."
      },
      {
        type: "vocab",
        term: "die Uratkristalle",
        definition: "urate crystals — found in synovial fluid in gout",
        example: "Der Nachweis von Uratkristallen in der Gelenkflüssigkeit sichert die Diagnose Gicht."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf eine septische Arthritis am dringlichsten?",
        options: ["Umgehende Gelenkpunktion und Beginn einer antibiotischen Therapie", "Abwarten und Schmerzmittel geben", "Ambulante Physiotherapie", "Kontrolle in zwei Wochen"],
        answerIndex: 0,
        explanation: "Eine septische Arthritis ist ein orthopädischer Notfall und erfordert sofortiges Handeln zum Gelenkerhalt."
      },
      {
        type: "cloze",
        text: "Eine septische Arthritis ist ein ___ und erfordert rasches Handeln, um das Gelenk zu erhalten.",
        options: ["Notfall", "Zufallsbefund", "Spätsymptom", "harmloser Befund"],
        answerIndex: 0,
        explanation: "Unbehandelt kann eine septische Arthritis das Gelenk irreversibel zerstören."
      },
      {
        type: "vocab",
        term: "die septische Arthritis",
        definition: "septic arthritis — bacterial joint infection, an orthopedic emergency",
        example: "Bei Fieber und akut geschwollenem, überwärmtem Gelenk muss eine septische Arthritis ausgeschlossen werden."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund der symmetrischen Polyarthritis mit Morgensteifigkeit über zwei Stunden und positivem Rheumafaktor gehe ich am ehesten von einer rheumatoiden Arthritis aus.",
          "Gelenke tun halt weh.",
          "Vielleicht Rheuma, vielleicht nicht.",
          "Keine Ahnung, was es ist."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Präsentation nennt Befunde, Serologie und die daraus abgeleitete Verdachtsdiagnose."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Differenzialdiagnose dürfen Sie bei akuter Monarthritis mit Fieber nicht übersehen?“ Wie antworten Sie?",
        options: [
          "Die septische Arthritis, da sie unbehandelt das Gelenk irreversibel schädigen kann.",
          "Das ist immer nur Gicht.",
          "Fieber ist dabei nicht wichtig.",
          "Das kommt nie vor."
        ],
        answerIndex: 0,
        explanation: "Die septische Arthritis muss als gefährlichste Differenzialdiagnose bei akuter, fieberhafter Monarthritis immer bedacht werden."
      }
    ]
  },
  {
    id: "fg-oedeme-herzinsuffizienz",
    part: "fachgespraech",
    topic: "Kardiologie",
    title: "Ödeme & Herzinsuffizienz",
    description: "Differenzialdiagnose und Vorgehen bei dekompensierter Herzinsuffizienz.",
    pool: [
      {
        type: "mc",
        question: "Ein 68-jähriger Patient mit progredienten Beinödemen, Gewichtszunahme und Orthopnoe. Wichtigste Verdachtsdiagnose?",
        options: ["Dekompensierte Herzinsuffizienz", "Nierensteine", "Migräne", "Muskelkater"],
        answerIndex: 0,
        explanation: "Beinödeme, Gewichtszunahme und Orthopnoe sind klassisch für eine dekompensierte Herzinsuffizienz."
      },
      {
        type: "vocab",
        term: "die Dekompensation",
        definition: "decompensation — acute worsening of a chronic condition, e.g. heart failure, with fluid overload",
        example: "Der Patient stellt sich mit einer kardialen Dekompensation vor."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf eine dekompensierte Herzinsuffizienz am sinnvollsten?",
        options: ["Labor mit NT-proBNP, Röntgen-Thorax, Echokardiographie", "Nur ein Röntgen des Knies", "Nur eine Urinuntersuchung", "Nur ein Hörtest"],
        answerIndex: 0,
        explanation: "NT-proBNP, Röntgen-Thorax und Echokardiographie bilden die diagnostische Basis bei Verdacht auf Herzinsuffizienz."
      },
      {
        type: "cloze",
        text: "Ein erhöhter ___-Wert unterstützt die Diagnose einer Herzinsuffizienz.",
        options: ["NT-proBNP", "HbA1c", "PSA", "TSH"],
        answerIndex: 0,
        explanation: "NT-proBNP ist ein zentraler Laborparameter bei Verdacht auf Herzinsuffizienz."
      },
      {
        type: "vocab",
        term: "die Stauungslunge",
        definition: "pulmonary congestion — fluid buildup in the lungs due to heart failure",
        example: "Im Röntgen-Thorax zeigten sich Zeichen einer Stauungslunge."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei beidseitigen Beinödemen zusätzlich zur Herzinsuffizienz nennen?",
        options: ["Niereninsuffizienz und Leberzirrhose", "Migräne und Sodbrennen", "Rückenschmerzen und Muskelkater", "Erkältung und Heuschnupfen"],
        answerIndex: 0,
        explanation: "Niereninsuffizienz und Leberzirrhose sind wichtige nicht-kardiale Ursachen beidseitiger Beinödeme."
      },
      {
        type: "cloze",
        text: "Bei akuter Dekompensation behandeln wir zunächst mit intravenösen ___ zur Ausschwemmung.",
        options: ["Diuretika", "Antibiotika", "Insulin", "Schmerzmitteln"],
        answerIndex: 0,
        explanation: "Intravenöse Diuretika sind die Basistherapie der akut dekompensierten Herzinsuffizienz."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund der progredienten Beinödeme, Orthopnoe und des erhöhten NT-proBNP gehe ich am ehesten von einer dekompensierten Herzinsuffizienz aus.",
          "Er hat halt dicke Beine.",
          "Vielleicht Herz, vielleicht Nieren.",
          "Keine Ahnung, was es ist."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Präsentation nennt Befunde, Laborwerte und die daraus abgeleitete Verdachtsdiagnose."
      },
      {
        type: "vocab",
        term: "die Auskultation",
        definition: "auscultation — listening to internal sounds (e.g. lungs, heart) with a stethoscope",
        example: "Bei der Auskultation der Lunge zeigten sich beidseits feuchte Rasselgeräusche."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Ursachen einer Herzinsuffizienz sollten Sie abklären?“ Wie antworten Sie?",
        options: ["Koronare Herzkrankheit, Hypertonie, Klappenerkrankungen und Rhythmusstörungen.", "Nur das Alter zählt.", "Es gibt keine bekannten Ursachen.", "Herzinsuffizienz hat immer die gleiche Ursache."],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt die häufigsten zugrunde liegenden Ursachen einer Herzinsuffizienz."
      }
    ]
  },
  {
    id: "fg-hypertonie",
    part: "fachgespraech",
    topic: "Kardiologie",
    title: "Hypertonie",
    description: "Differenzialdiagnose und Vorgehen bei hypertensivem Notfall und schwer einstellbarer Hypertonie.",
    pool: [
      {
        type: "mc",
        question: "Ein Patient mit Blutdruck 220/130 mmHg, starken Kopfschmerzen und Sehstörungen. Wichtigste Verdachtsdiagnose?",
        options: ["Hypertensiver Notfall", "Migräne", "Spannungskopfschmerz", "Erkältung"],
        answerIndex: 0,
        explanation: "Stark erhöhter Blutdruck mit Symptomen einer Endorganschädigung definiert den hypertensiven Notfall."
      },
      {
        type: "vocab",
        term: "der hypertensive Notfall",
        definition: "hypertensive emergency — severely elevated blood pressure with acute end-organ damage",
        example: "Bei Sehstörungen und stark erhöhtem Blutdruck besteht der Verdacht auf einen hypertensiven Notfall."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf einen hypertensiven Notfall am wichtigsten?",
        options: [
          "Kontrollierte, zügige aber nicht zu schnelle Blutdrucksenkung unter stationärer Überwachung",
          "Sofortige maximale Blutdrucksenkung ambulant",
          "Abwarten ohne Therapie",
          "Nur Schmerzmittel geben"
        ],
        answerIndex: 0,
        explanation: "Die Blutdrucksenkung muss kontrolliert erfolgen, um eine zerebrale Minderperfusion zu vermeiden."
      },
      {
        type: "cloze",
        text: "Eine zu ___ Blutdrucksenkung kann eine zerebrale Minderperfusion verursachen.",
        options: ["schnelle", "langsame", "gar keine", "leichte"],
        answerIndex: 0,
        explanation: "Eine zu rasche Blutdrucksenkung ist beim hypertensiven Notfall gefährlich."
      },
      {
        type: "vocab",
        term: "die zerebrale Minderperfusion",
        definition: "cerebral hypoperfusion — reduced blood flow to the brain",
        example: "Eine zu schnelle Blutdrucksenkung kann eine zerebrale Minderperfusion verursachen."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei starkem Bluthochdruck bei einem jungen Patienten in Betracht ziehen?",
        options: ["Sekundäre Hypertonie (z. B. renal, endokrin)", "Nur primäre Hypertonie", "Migräne", "Muskelkater"],
        answerIndex: 0,
        explanation: "Bei jungen Patienten mit schwerer Hypertonie sollte eine sekundäre Ursache aktiv gesucht werden."
      },
      {
        type: "cloze",
        text: "Bei jungen Patienten mit schwer einstellbarer Hypertonie sollte eine ___ Ursache ausgeschlossen werden.",
        options: ["sekundäre", "rein psychische", "virale", "allergische"],
        answerIndex: 0,
        explanation: "Sekundäre Hypertonieformen (z. B. renal, endokrin) sind bei jungen Patienten häufiger als angenommen."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund des stark erhöhten Blutdrucks mit Sehstörungen und Kopfschmerzen gehe ich von einem hypertensiven Notfall mit Zielorganschädigung aus.",
          "Blutdruck ist halt hoch.",
          "Vielleicht Notfall, vielleicht nicht.",
          "Keine Ahnung, was es ist."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Präsentation nennt Befunde und die daraus abgeleitete Verdachtsdiagnose."
      },
      {
        type: "vocab",
        term: "die Endorganschädigung",
        definition: "end-organ damage",
        example: "Beim hypertensiven Notfall steht die akute Endorganschädigung im Vordergrund."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Welche Organe sind bei einem hypertensiven Notfall besonders gefährdet?“ Wie antworten Sie?",
        options: ["Gehirn, Herz, Nieren und Augen.", "Nur die Haut.", "Nur die Muskeln.", "Keine Organe sind gefährdet."],
        answerIndex: 0,
        explanation: "Eine gute Antwort nennt die klassischen Zielorgane einer hypertensiven Endorganschädigung vollständig."
      }
    ]
  },
  {
    id: "fg-muedigkeit-anaemie",
    part: "fachgespraech",
    topic: "Hämatologie",
    title: "Müdigkeit & Anämie",
    description: "Differenzialdiagnose und Vorgehen bei chronischer Müdigkeit und Anämie.",
    pool: [
      {
        type: "mc",
        question: "Eine 32-jährige Patientin mit Müdigkeit, Blässe und starken Monatsblutungen. Wichtigste Verdachtsdiagnose?",
        options: ["Eisenmangelanämie", "Hypothyreose", "Depression", "Migräne"],
        answerIndex: 0,
        explanation: "Starke Monatsblutungen sind eine häufige Ursache einer Eisenmangelanämie."
      },
      {
        type: "vocab",
        term: "die mikrozytäre Anämie",
        definition: "microcytic anemia — anemia with smaller-than-normal red blood cells, typically from iron deficiency",
        example: "Im Blutbild zeigte sich eine mikrozytäre, hypochrome Anämie."
      },
      {
        type: "mc",
        question: "Welches Vorgehen ist bei Verdacht auf eine Eisenmangelanämie am sinnvollsten?",
        options: ["Blutbild, Ferritin, ggf. Gastro- und Koloskopie zur Ursachensuche", "Nur ein EKG", "Nur eine Urinuntersuchung", "Nur ein Röntgen des Knies"],
        answerIndex: 0,
        explanation: "Neben Blutbild und Ferritin muss bei Eisenmangelanämie immer nach der Blutungsquelle gesucht werden."
      },
      {
        type: "cloze",
        text: "Ein erniedrigter ___-Wert bestätigt eine Eisenmangelanämie.",
        options: ["Ferritin", "HbA1c", "PSA", "TSH"],
        answerIndex: 0,
        explanation: "Ferritin ist der spezifischste Laborparameter zur Bestätigung eines Eisenmangels."
      },
      {
        type: "vocab",
        term: "die perniziöse Anämie",
        definition: "pernicious anemia — vitamin B12 deficiency anemia due to impaired absorption",
        example: "Bei megaloblastärer Anämie denken wir auch an eine perniziöse Anämie durch Vitamin-B12-Mangel."
      },
      {
        type: "mc",
        question: "Welche Differenzialdiagnose sollten Sie bei Müdigkeit und Anämie zusätzlich zur Eisenmangelanämie nennen?",
        options: ["Vitamin-B12- oder Folsäuremangel und chronische Erkrankungen", "Nur Eisenmangel", "Migräne", "Muskelkater"],
        answerIndex: 0,
        explanation: "Anämie kann viele Ursachen haben, u. a. Vitamin-B12-/Folsäuremangel oder chronische Erkrankungen."
      },
      {
        type: "cloze",
        text: "Bei Verdacht auf eine gastrointestinale Blutungsquelle veranlassen wir eine Gastro- und ___.",
        options: ["Koloskopie", "Bronchoskopie", "Zystoskopie", "Arthroskopie"],
        answerIndex: 0,
        explanation: "Gastro- und Koloskopie sind die Standarduntersuchungen zur Suche nach einer gastrointestinalen Blutungsquelle."
      },
      {
        type: "mc",
        question: "Wie präsentieren Sie den Fall professionell?",
        options: [
          "Aufgrund der mikrozytären Anämie mit erniedrigtem Ferritin bei bekannten starken Monatsblutungen gehe ich am ehesten von einer Eisenmangelanämie aus.",
          "Sie ist halt müde.",
          "Vielleicht Anämie, vielleicht nicht.",
          "Keine Ahnung, was es ist."
        ],
        answerIndex: 0,
        explanation: "Eine strukturierte Präsentation nennt Laborbefunde, Anamnese und die daraus abgeleitete Verdachtsdiagnose."
      },
      {
        type: "vocab",
        term: "die Substitutionstherapie",
        definition: "replacement/supplementation therapy",
        example: "Wir beginnen eine Substitutionstherapie mit oralem Eisen."
      },
      {
        type: "mc",
        question: "Der Oberarzt fragt: „Wann sollte man bei Eisenmangelanämie zwingend eine endoskopische Abklärung veranlassen?“ Wie antworten Sie?",
        options: [
          "Bei Männern und postmenopausalen Frauen immer, um eine gastrointestinale Blutungsquelle wie ein Karzinom auszuschließen.",
          "Nie, das ist nicht nötig.",
          "Nur bei Kindern.",
          "Nur wenn der Patient danach fragt."
        ],
        answerIndex: 0,
        explanation: "Bei Männern und postmenopausalen Frauen ist eine Eisenmangelanämie bis zum Beweis des Gegenteils durch eine gastrointestinale Blutung verursacht und muss endoskopisch abgeklärt werden."
      }
    ]
  }
];
