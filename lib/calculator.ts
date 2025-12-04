import { ResultType } from './results';

export function calculateType(answers: number[]): ResultType {
    // answers = [0,1,2,0,1...] (a=0, b=1, c=2, d=3)

    // 관계 깊이 점수 (Q3, Q4, Q9)
    // Q3: a(0), b(1) -> +2
    // Q3: d(3) -> +2
    // Q4: a(0), d(3) -> +2
    // Q9: c(2), d(3) -> +2

    let depth = 0;

    // Q3 (index 2)
    if (answers[2] === 0 || answers[2] === 1 || answers[2] === 3) depth += 2;
    // Wait, PRD logic:
    // if (answers[2] === 0 || answers[2] === 1) depth += 2 // Q3: a,b
    // if (answers[2] === 3) depth += 2 // Q3: d
    // So a,b,d all give +2? Let's check PRD again.
    // PRD:
    // if (answers[2] === 0 || answers[2] === 1) depth += 2 // Q3: a,b
    // if (answers[2] === 3) depth += 2 // Q3: d
    // Yes, a, b, d give depth points. c (설레는 감정) gives 0?

    // Q4 (index 3)
    if (answers[3] === 0 || answers[3] === 3) depth += 2; // Q4: a,d

    // Q9 (index 8)
    if (answers[8] === 2 || answers[8] === 3) depth += 2; // Q9: c,d

    // 소통 스타일 점수 (Q2, Q6)
    let talk = 0;

    // Q2 (index 1)
    if (answers[1] === 0 || answers[1] === 2) talk += 3; // Q2: a,c

    // Q6 (index 5)
    if (answers[5] === 1 || answers[5] === 3) talk += 3; // Q6: b,d

    // 결과 결정
    if (depth >= 4 && talk >= 3) return 'deep-talker';
    if (depth >= 4 && talk < 3) return 'calm-romantic';
    if (depth < 4 && talk >= 3) return 'energetic-connector';
    return 'free-explorer';
}
