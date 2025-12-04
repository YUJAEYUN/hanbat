export type ResultType = 'deep-talker' | 'calm-romantic' | 'energetic-connector' | 'free-explorer';

export type Result = {
    type: ResultType;
    image: string;
    title: string;
    subtitle: string;
    description: string[];
    compatibility: string[];
    tips: string[];
    stats: {
        percentage: number;
        count: number;
        rank: number;
    };
};

export const results: Record<ResultType, Result> = {
    'deep-talker': {
        type: 'deep-talker',
        image: '/deep-talker.png',
        title: '진중한 대화가',
        subtitle: 'Deep Talker',
        description: [
            "당신은 화려한 스펙이나 외모보다는, '말이 통하는 사람'과의 깊은 연결을 중요하게 생각해요.",
            "많은 사람을 만나는 것보다, 단 한 명이라도 서로의 가치관을 나누고 이해할 수 있는 관계가 진짜라고 믿죠.",
            "썸타임도 그런 당신의 마음에 공감해요. 우리가 추구하는 것도 수많은 매칭이 아니라, 당신의 마음에 남을 단 한 번의 의미 있는 만남이니까요."
        ],
        compatibility: ['진중한 대화가', '차분한 감성러'],
        tips: [
            '조용한 카페에서 서로의 생각 나누기',
            '가치관이나 삶의 방향에 대한 대화',
            '서두르지 않고 천천히 알아가기',
        ],
        stats: {
            percentage: 32,
            count: 89,
            rank: 1,
        },
    },
    'calm-romantic': {
        type: 'calm-romantic',
        image: '/calm-romantic.png',
        title: '차분한 감성러',
        subtitle: 'Calm Romantic',
        description: [
            "당신은 자극적인 설렘보다는, 함께 있을 때 편안하고 따뜻한 온기를 나눌 수 있는 사람을 찾고 있어요.",
            "천천히 스며드는 관계의 소중함을 아는 당신. 친구처럼 편안하게 시작해서, 서로에게 없어서는 안 될 존재가 되고 싶어 하죠.",
            "썸타임은 당신의 속도를 존중해요. 억지로 꾸며내지 않아도, 당신의 있는 그대로의 모습을 좋아해 줄 사람이 분명 있을 거예요."
        ],
        compatibility: ['진중한 대화가', '차분한 감성러'],
        tips: [
            '산책하며 나누는 소소한 일상 대화',
            '꾸밈없는 모습 보여주기',
            '침묵도 편안하게 즐기는 여유',
        ],
        stats: {
            percentage: 28,
            count: 76,
            rank: 2,
        },
    },
    'energetic-connector': {
        type: 'energetic-connector',
        image: '/energetic-connector.png',
        title: '활발한 에너자이저',
        subtitle: 'Energetic Connector',
        description: [
            "당신은 함께 웃고 즐기며 에너지를 주고받을 수 있는 활기찬 관계를 꿈꾸고 있어요.",
            "어색한 분위기를 참지 못하고 먼저 다가가는 당신의 용기는, 상대방에게도 큰 힘이 되어줄 거예요.",
            "썸타임은 당신의 그 밝은 에너지가 더 빛날 수 있도록 돕고 싶어요. 당신의 즐거움이 누군가에게는 하루를 살아가는 힘이 될 테니까요."
        ],
        compatibility: ['활발한 에너자이저', '자유로운 모험가'],
        tips: [
            '함께 땀 흘리거나 활동적인 데이트',
            '솔직하고 유쾌한 감정 표현',
            '서로의 취미 공유하며 즐거움 찾기',
        ],
        stats: {
            percentage: 24,
            count: 67,
            rank: 3,
        },
    },
    'free-explorer': {
        type: 'free-explorer',
        image: '/free-explorer.png',
        title: '자유로운 모험가',
        subtitle: 'Free Explorer',
        description: [
            "당신은 남들이 정해놓은 연애의 틀보다는, 우리 둘만이 만들어가는 특별한 이야기를 원해요.",
            "서로의 다름을 인정하고 존중하며, 함께 새로운 세상을 탐험하는 것이 진정한 사랑이라고 생각하죠.",
            "썸타임은 틀에 갇히지 않은 당신의 자유로움을 응원해요. 정해진 답은 없어요. 당신이 만들어가는 그 길이 곧 정답이니까요."
        ],
        compatibility: ['활발한 에너자이저', '자유로운 모험가'],
        tips: [
            '새로운 장소나 경험 함께 도전하기',
            '서로의 독립적인 시간 존중하기',
            '"우리 이거 해볼까?" 먼저 제안하기',
        ],
        stats: {
            percentage: 16,
            count: 45,
            rank: 4,
        },
    },
};
