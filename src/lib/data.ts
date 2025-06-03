export interface MathExample {
  id: string;
  problemNahuatl: string;
  explanationNahuatl: string;
  problemVisual?: string; // e.g., "1 + 1 = ?"
}

export interface Lecture {
  id: string;
  titleNahuatl: string;
  titleEnglish: string;
  contentNahuatl: string[]; // Array of paragraphs
  mathExamples: MathExample[];
  icon?: string; // Placeholder for a relevant icon name or path
}

export const lectures: Lecture[] = [
  {
    id: '1',
    titleNahuatl: 'Tēmachtīliztli Cē: Tlapōhualiztli Xochitlakuali',
    titleEnglish: 'Lesson 1: Counting Fruits',
    contentNahuatl: [
      'Niltze! In axkan timomachtizqueh tlapōhualiztli. ¿Kēnyi timopōhuah?',
      'Xiquita izozoh xochitlakuali. Maeh monamaca cē xōchihkualli īhuān oc cē xōchihkualli. ¿Kātlēci monamacah?',
      'Shihua se xochitl ihuan occe xochitl, itoka ome xochitl. Cē īhuān cē īpan cē machtia ōme.',
      'Āxcān, ma timomachtīcān occe tlapōhualiztli.'
    ],
    mathExamples: [
      {
        id: '1-1',
        problemNahuatl: 'Cē mātzāpōtl īhuān cē mātzāpōtl. ¿Kātlēci mātzāpōtl onka?',
        explanationNahuatl: 'Ōme mātzāpōtl. (Cē + Cē = Ōme)',
        problemVisual: '🍎 + 🍎 = ?',
      },
      {
        id: '1-2',
        problemNahuatl: 'Ōme tlalxokotl īhuān cē tlalxokotl. ¿Kātlēci tlalxokotl onka?',
        explanationNahuatl: 'Ēyi tlalxokotl. (Ōme + Cē = Ēyi)',
        problemVisual: '🍊🍊 + 🍊 = ?',
      },
      {
        id: '1-3',
        problemNahuatl: 'Ēyi āxokatl īhuān ōme āxokatl. ¿Kātlēci āxokatl onka?',
        explanationNahuatl: 'Mākuīlli āxokatl. (Ēyi + Ōme = Mākuīlli)',
        problemVisual: '🥑🥑🥑 + 🥑🥑 = ?',
      },
    ],
    icon: "Apple", // Lucide icon name suggestion
  },
  {
    id: '2',
    titleNahuatl: 'Tēmachtīliztli Ōme: Tlatēktiliztli Āmantēcayōtl',
    titleEnglish: 'Lesson 2: Subtracting Feathers',
    contentNahuatl: [
      'Niltze chicahualiztli! Āxcān, ma timomachtīcān tlatēktiliztli.',
      'Xiquita izozoh āmantēcayōtl. Intla onka mākuīlli āmantēcayōtl īhuān titlakuī ōme, ¿kātlēci āmantēcayōtl mocāhua?',
      'Makuilli ihuan tiktekia ome, itoka eyi amantecayotl. Mākuīlli menos ōme īpan cē machtia ēyi.',
    ],
    mathExamples: [
      {
        id: '2-1',
        problemNahuatl: 'Mākuīlli īhuitl īhuān titlakuī ōme īhuitl. ¿Kātlēci īhuitl mocāhua?',
        explanationNahuatl: 'Ēyi īhuitl. (Mākuīlli - Ōme = Ēyi)',
        problemVisual: '🪶🪶🪶🪶🪶 - 🪶🪶 = ?',
      },
      {
        id: '2-2',
        problemNahuatl: 'Nāuhpōhualxochitl īhuān titlakuī cē. ¿Kātlēci mocāhua?',
        explanationNahuatl: 'Ēyi. (Nāuhpōhualxochitl - Cē = Ēyi)',
        problemVisual: '🌸🌸🌸🌸 - 🌸 = ?',
      },
    ],
    icon: "Feather", // Lucide icon name suggestion
  },
];

export const getLectureById = (id: string): Lecture | undefined => {
  return lectures.find(lecture => lecture.id === id);
};

// Nahuatl numbers for reference (basic):
// 1: Cē
// 2: Ōme
// 3: Ēyi / Yēi
// 4: Nāhui
// 5: Mākuīlli
// + : īhuān
// = : īpan cē machtia / ītokā
// - : menos / titlakuī / tiktekia
