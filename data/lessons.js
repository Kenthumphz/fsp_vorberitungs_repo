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
  }
];
