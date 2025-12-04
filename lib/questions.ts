export type Option = {
    value: number;
    label: string;
};

export type Question = {
    id: number;
    text: string;
    options: Option[];
};

export const questions: Question[] = [
    {
        id: 1,
        text: "이상적인 첫 만남 장소는?",
        options: [
            { value: 0, label: "조용한 카페에서 대화에 집중" },
            { value: 1, label: "맛집 투어하며 자연스럽게" },
            { value: 2, label: "전시회나 공연 보며 문화 생활" },
            { value: 3, label: "산책하며 편하게 걸어다니기" },
        ],
    },
    {
        id: 2,
        text: "처음 만난 사람과 대화할 때 당신은?",
        options: [
            { value: 0, label: "상대방 이야기를 들어주는 편" },
            { value: 1, label: "내가 먼저 이야기를 이끄는 편" },
            { value: 2, label: "서로 번갈아가며 균형있게" },
            { value: 3, label: "침묵도 편안하게 받아들이는 편" },
        ],
    },
    {
        id: 3,
        text: "연애에서 가장 중요하게 생각하는 건?",
        options: [
            { value: 0, label: "대화가 잘 통하고 편안한 것" },
            { value: 1, label: "서로의 가치관이 비슷한 것" },
            { value: 2, label: "함께 있을 때 설레는 감정" },
            { value: 3, label: "서로를 응원하고 성장하는 것" },
        ],
    },
    {
        id: 4,
        text: "연애 시작 전, 당신의 스타일은?",
        options: [
            { value: 0, label: "천천히 알아가며 친구부터 시작" },
            { value: 1, label: "확실한 호감이 느껴지면 빠르게" },
            { value: 2, label: "여러 명 만나보고 비교하며 결정" },
            { value: 3, label: "한 명에게만 집중하며 진지하게" },
        ],
    },
    {
        id: 5,
        text: "좋아하는 사람이 생겼을 때 나는?",
        options: [
            { value: 0, label: "먼저 연락하고 적극적으로 다가감" },
            { value: 1, label: "상대의 반응을 보며 조심스럽게" },
            { value: 2, label: "친구들에게 조언을 구함" },
            { value: 3, label: "일단 관찰하며 확신이 들 때까지" },
        ],
    },
    {
        id: 6,
        text: "이성과의 대화에서 더 끌리는 주제는?",
        options: [
            { value: 0, label: "취미, 관심사 같은 일상 이야기" },
            { value: 1, label: "꿈, 미래에 대한 진지한 대화" },
            { value: 2, label: "웃긴 이야기나 가벼운 농담" },
            { value: 3, label: "고민이나 감정에 대한 깊은 대화" },
        ],
    },
    {
        id: 7,
        text: "대학 생활에서 연애가 안 되는 이유는?",
        options: [
            { value: 0, label: "만날 기회 자체가 없어서" },
            { value: 1, label: "소개팅 앱은 부담스러워서" },
            { value: 2, label: "용기가 없어서" },
            { value: 3, label: "좋은 사람을 못 만나서" },
        ],
    },
    {
        id: 8,
        text: "소개팅에서 가장 중요한 건?",
        options: [
            { value: 0, label: "실제로 만났을 때 편안한 느낌" },
            { value: 1, label: "대화가 자연스럽게 이어지는 것" },
            { value: 2, label: "공통 관심사나 취미가 있는 것" },
            { value: 3, label: "서로에 대한 진지한 관심" },
        ],
    },
    {
        id: 9,
        text: "연애를 시작한다면 어떤 관계를 원해?",
        options: [
            { value: 0, label: "서로 독립적이되 함께하는 시간을 소중히" },
            { value: 1, label: "자주 만나며 많은 시간을 함께" },
            { value: 2, label: "편한 친구 같으면서도 설레는 사이" },
            { value: 3, label: "서로를 이해하고 존중하는 깊은 관계" },
        ],
    },
    {
        id: 10,
        text: "이 테스트를 하는 이유는?",
        options: [
            { value: 0, label: "그냥 심심해서 재밌을 것 같아서" },
            { value: 1, label: "내 연애 스타일이 궁금해서" },
            { value: 2, label: "실제로 소개팅 생각 중이라서" },
            { value: 3, label: "친구가 공유해서 / 에타에서 봐서" },
        ],
    },
];
