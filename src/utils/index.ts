const firstLetterUpperCase = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
const idWithHashTag = (id: string) => `  #${'0000'.substring(0, '0000'.length - id.length) + id}`;
const heightToMeter = (height: number) => `${height / 10} m`;
const weightToKg = (weight: number) => `${weight / 10} kg`;

export default {
  firstLetterUpperCase,
  idWithHashTag,
  heightToMeter,
  weightToKg
};
