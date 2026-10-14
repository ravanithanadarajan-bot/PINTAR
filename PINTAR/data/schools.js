// Data file containing 234 mock school records
const schoolNamesPool = [
    { name: "SMK Seri Jaya", type: "SMK", state: "Pahang" },
    { name: "SMK Pekan", type: "SMK", state: "Pahang" },
    { name: "SK Taman Bakthi", type: "SK", state: "Johor" },
    { name: "SJKT Taman Maju", type: "SJKT", state: "Perak" },
    { name: "SMK Seri Aman", type: "SMK", state: "Pulau Pinang" },
    { name: "SMK Abu Bakar", type: "SMK", state: "Pahang" },
    { name: "SJK(C) Chung Hua", type: "SJK(Cina)", state: "Selangor" },
    { name: "SK Methodist", type: "SK", state: "Wilayah Persekutuan" },
    { name: "SMK Convent", type: "SMK", state: "Melaka" },
    { name: "SJKT Ladang Victoria", type: "SJKT", state: "Kedah" }
];

const statesPool = ["Pahang", "Johor", "Perak", "Pulau Pinang", "Selangor", "Wilayah Persekutuan", "Melaka", "Kedah", "Negeri Sembilan", "Sabah", "Sarawak"];

// Dynamic generation to hit exactly 234 items
const schoolsData = [];
for (let i = 1; i <= 234; i++) {
    const template = schoolNamesPool[(i - 1) % schoolNamesPool.length];

    // Mix data up slightly for true dynamic rendering feel
    let finalType = template.type;
    if (i % 7 === 0) finalType = "SJK(Cina)";
    if (i % 11 === 0) finalType = "SJKT";
    if (i % 5 === 0) finalType = "SK";

    let finalState = template.state;
    if (i > 10) {
        finalState = statesPool[i % statesPool.length];
    }

    schoolsData.push({
        id: i,
        name: `${template.name.split(' ').slice(0, 2).join(' ')} ${String.fromCharCode(65 + (i % 26))}${i}`,
        state: finalState,
        type: finalType,
        totalStudents: Math.floor(Math.random() * (600 - 100 + 1)) + 100,
        averageScore: Math.floor(Math.random() * (98 - 60 + 1)) + 60
    });
}

// Global scope availability so authority/js/ scripts can read it directly
window.schoolsData = schoolsData;