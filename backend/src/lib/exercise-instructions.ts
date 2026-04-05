type ExerciseInstructionInput = {
  name: string;
  equipment: string;
  primarymuscle: string;
  secondarymuscle: string[];
};

function normalizeEquipment(equipment: string) {
  return equipment.toLowerCase().replaceAll("_", " ");
}

function joinSecondaryMuscles(secondarymuscle: string[]) {
  if (secondarymuscle.length === 0) {
    return "";
  }

  if (secondarymuscle.length === 1) {
    return ` while keeping your ${secondarymuscle[0].toLowerCase()} steady`;
  }

  return ` while keeping your ${secondarymuscle
    .map((muscle) => muscle.toLowerCase())
    .join(" and ")} steady`;
}

export function getExerciseInstructions(exercise: ExerciseInstructionInput) {
  const lowerName = exercise.name.toLowerCase();
  const equipment = normalizeEquipment(exercise.equipment);
  const primary = exercise.primarymuscle.toLowerCase();
  const secondary = joinSecondaryMuscles(exercise.secondarymuscle);

  if (lowerName.includes("press")) {
    return `Set your stance, brace your core, and press the ${equipment} through a smooth range of motion while driving the effort through your ${primary}${secondary}.`;
  }

  if (lowerName.includes("curl")) {
    return `Keep your elbows pinned, lift the ${equipment} under control, and squeeze your ${primary} at the top instead of swinging the weight${secondary}.`;
  }

  if (lowerName.includes("row")) {
    return `Hinge into a stable position, pull the ${equipment} back with your elbows, and lower it slowly to keep tension on your ${primary}${secondary}.`;
  }

  if (lowerName.includes("squat")) {
    return `Stay balanced through your whole foot, control the descent, and stand tall by driving through your legs and hips to train your ${primary}${secondary}.`;
  }

  if (lowerName.includes("deadlift")) {
    return `Brace hard before you lift, keep the ${equipment} close to your body, and finish tall without letting your back round so your ${primary} does the work${secondary}.`;
  }

  if (lowerName.includes("lunge") || lowerName.includes("split squat")) {
    return `Take a stable step, lower with control, and drive back up without losing balance so your ${primary} stays loaded the whole rep${secondary}.`;
  }

  if (lowerName.includes("fly")) {
    return `Open your arms under control, keep a soft bend in your elbows, and bring the ${equipment} back together by squeezing through your ${primary}${secondary}.`;
  }

  if (lowerName.includes("raise")) {
    return `Lift the ${equipment} with control, stop before momentum takes over, and lower slowly to keep constant tension on your ${primary}${secondary}.`;
  }

  if (lowerName.includes("dip")) {
    return `Lower yourself under control, keep your shoulders stable, and press back up smoothly so your ${primary} stays engaged${secondary}.`;
  }

  if (lowerName.includes("pull up") || lowerName.includes("pulldown")) {
    return `Start from a stretched position, pull with your elbows, and control the lowering phase so your ${primary} stays active on every rep${secondary}.`;
  }

  if (lowerName.includes("crunch") || lowerName.includes("sit up") || lowerName.includes("leg raise")) {
    return `Move slowly, brace your midline first, and focus on curling through your trunk so your ${primary} works instead of using momentum${secondary}.`;
  }

  if (lowerName.includes("plank")) {
    return `Brace your core, keep your hips level, and hold a straight-body position while breathing under control to challenge your ${primary}${secondary}.`;
  }

  if (lowerName.includes("push up")) {
    return `Stay tight from shoulders to heels, lower with control, and press back up through a full range to load your ${primary}${secondary}.`;
  }

  if (lowerName.includes("extension")) {
    return `Set up with your joints aligned, move only through the working area, and pause briefly at the hardest point to keep tension on your ${primary}${secondary}.`;
  }

  if (lowerName.includes("cardio") || lowerName.includes("bike") || lowerName.includes("boxing") || lowerName.includes("battle ropes")) {
    return `Find a steady rhythm, keep your posture organized, and stay controlled instead of rushing so your ${primary} can work consistently.`;
  }

  return `Use controlled reps with the ${equipment}, move through a clean range of motion, and keep the effort centered on your ${primary}${secondary}.`;
}
