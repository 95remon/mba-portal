export const subjects = [
    {
        id: "managerial-economics",
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        title: {
            en: "Managerial Economics",
            ar: "الاقتصاد الإداري"
        },
        description: {
            en: "Analyze business decisions using economic theories.",
            ar: "تحليل قرارات الأعمال باستخدام النظريات الاقتصادية."
        },
        notebookLink: "#",
        weeks: [
            {
                id: "week1",
                title: { en: "Week 1", ar: "الأسبوع الأول" },
                resources: [
                    { type: "summary", label: { en: "Summary (Arabic)", ar: "ملخص (عربي)" }, url: "./courses/managerial-economics/week1/book.html" },
                    { type: "summary", label: { en: "Summary (English)", ar: "ملخص (إنجليزي)" }, url: "./courses/managerial-economics/week1/english/" },
                    { type: "quiz", label: { en: "Quiz 1 (Egyptian Arabic)", ar: "كويز 1 (عامية مصرية)" }, url: "./courses/managerial-economics/week1/quiz.html" }
                ]
            },
            {
                id: "week2",
                title: { en: "Week 2", ar: "الأسبوع الثاني" },
                resources: [
                    { type: "summary", label: { en: "Summary (Arabic)", ar: "ملخص (عربي)" }, url: "./courses/managerial-economics/week2/" },
                    { type: "summary", label: { en: "Summary (English)", ar: "ملخص (إنجليزي)" }, url: "./courses/managerial-economics/week2/english/" },
                    { type: "quiz", label: { en: "Practice Problems (Egyptian Arabic)", ar: "تمارين عملية (عامية مصرية)" }, url: "./courses/managerial-economics/week2/quiz.html" },
                    { type: "visual", label: { en: "Visual Study Guide 📊", ar: "الملخص المرئي 📊" }, url: "./courses/managerial-economics/week2/visual-guide.html" }
                ]
            }
        ]
    }
];
