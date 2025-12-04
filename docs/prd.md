# PRD: 한밭대 연애 유형 테스트 (MVP)

## 1. 프로젝트 개요

**목적:** 한밭대 에타 바이럴 → 썸타임 유저 획득
**타겟:** 한밭대생 (소개팅 앱 미경험자)
**개발 기간:** 2일
**예산:** 0원

---

## 2. 기능 범위 (MVP Only)

### 포함
- ✅ 10개 질문 페이지
- ✅ 4가지 결과 페이지
- ✅ 공유 기능 (카톡, 링크 복사)
- ✅ 썸타임 앱 연결
- ✅ 간단한 통계 (하드코딩)

### 미포함
- ❌ 회원가입/로그인
- ❌ 댓글 기능
- ❌ 실시간 통계 업데이트
- ❌ 백엔드 데이터 수집
- ❌ 이미지 자동 생성

---

## 3. 기술 스택

```
프론트엔드: Next.js (App Router)
스타일링: Tailwind CSS
배포: Vercel (무료)
도메인: test.sometime.im
```

**개발 시간:** 2일
- Day 1: 질문 + 결과 페이지
- Day 2: 스타일링 + 배포

---

## 4. 페이지 구조

```
/ (루트)
  ↓
/start (시작 화면)
  ↓
/question/1 → /question/2 → ... → /question/10
  ↓
/result/[type] (결과 페이지)
```

**URL 파라미터로 답변 전달:**
```
/result/deep-talker?answers=1,2,3,4,5,6,7,8,9,10
```

---

## 5. 시작 화면 (/start)

```
┌─────────────────────────────┐
│                             │
│      [아이콘/이모지]          │
│                             │
│   한밭대생 연애 유형 테스트    │
│                             │
│   "나는 어떤 스타일일까?"     │
│                             │
├─────────────────────────────┤
│                             │
│  ✓ 10개 질문 / 2분 소요      │
│  ✓ 개인정보 수집 안함        │
│  ✓ 결과는 4가지 유형         │
│                             │
├─────────────────────────────┤
│                             │
│    [시작하기 버튼]           │
│                             │
└─────────────────────────────┘
```

**버튼 클릭 → `/question/1`로 이동**

---

## 6. 질문 페이지 (/question/[1-10])

### 레이아웃

```
┌─────────────────────────────┐
│  [← 뒤로]    10개 중 3번째   │
├─────────────────────────────┤
│  ████████░░░░░░░░  (30%)    │ ← 프로그레스바
├─────────────────────────────┤
│                             │
│  처음 만난 사람과            │
│  대화할 때 당신은?           │
│                             │
├─────────────────────────────┤
│  ┌─────────────────────┐   │
│  │ a) 상대방 이야기를   │   │
│  │    들어주는 편      │   │
│  └─────────────────────┘   │
│                             │
│  ┌─────────────────────┐   │
│  │ b) 내가 먼저        │   │
│  │    이야기하는 편    │   │
│  └─────────────────────┘   │
│                             │
│  (c, d 선택지...)           │
│                             │
└─────────────────────────────┘
```

### 동작
1. 선택지 클릭 시 하이라이트
2. 자동으로 다음 질문으로 (0.3초 딜레이)
3. 뒤로가기 버튼: 이전 질문
4. 답변은 URL 파라미터로 누적

```javascript
// 답변 누적 예시
/question/3?a=1,2 (1,2,3번 답변)
```

---

## 7. 질문 리스트 (최종)

### Q1
```
이상적인 첫 만남 장소는?

a) 조용한 카페에서 대화에 집중
b) 맛집 투어하며 자연스럽게
c) 전시회나 공연 보며 문화 생활
d) 산책하며 편하게 걸어다니기
```

### Q2
```
처음 만난 사람과 대화할 때 당신은?

a) 상대방 이야기를 들어주는 편
b) 내가 먼저 이야기를 이끄는 편
c) 서로 번갈아가며 균형있게
d) 침묵도 편안하게 받아들이는 편
```

### Q3
```
연애에서 가장 중요하게 생각하는 건?

a) 대화가 잘 통하고 편안한 것
b) 서로의 가치관이 비슷한 것
c) 함께 있을 때 설레는 감정
d) 서로를 응원하고 성장하는 것
```

### Q4
```
연애 시작 전, 당신의 스타일은?

a) 천천히 알아가며 친구부터 시작
b) 확실한 호감이 느껴지면 빠르게
c) 여러 명 만나보고 비교하며 결정
d) 한 명에게만 집중하며 진지하게
```

### Q5
```
좋아하는 사람이 생겼을 때 나는?

a) 먼저 연락하고 적극적으로 다가감
b) 상대의 반응을 보며 조심스럽게
c) 친구들에게 조언을 구함
d) 일단 관찰하며 확신이 들 때까지
```

### Q6
```
이성과의 대화에서 더 끌리는 주제는?

a) 취미, 관심사 같은 일상 이야기
b) 꿈, 미래에 대한 진지한 대화
c) 웃긴 이야기나 가벼운 농담
d) 고민이나 감정에 대한 깊은 대화
```

### Q7
```
대학 생활에서 연애가 안 되는 이유는?

a) 만날 기회 자체가 없어서
b) 소개팅 앱은 부담스러워서
c) 용기가 없어서
d) 좋은 사람을 못 만나서
```

### Q8
```
소개팅에서 가장 중요한 건?

a) 실제로 만났을 때 편안한 느낌
b) 대화가 자연스럽게 이어지는 것
c) 공통 관심사나 취미가 있는 것
d) 서로에 대한 진지한 관심
```

### Q9
```
연애를 시작한다면 어떤 관계를 원해?

a) 서로 독립적이되 함께하는 시간을 소중히
b) 자주 만나며 많은 시간을 함께
c) 편한 친구 같으면서도 설레는 사이
d) 서로를 이해하고 존중하는 깊은 관계
```

### Q10
```
이 테스트를 하는 이유는?

a) 그냥 심심해서 재밌을 것 같아서
b) 내 연애 스타일이 궁금해서
c) 실제로 소개팅 생각 중이라서
d) 친구가 공유해서 / 에타에서 봐서
```

---

## 8. 결과 계산 로직

```javascript
function calculateType(answers) {
  // answers = [0,1,2,0,1...] (a=0, b=1, c=2, d=3)
  
  // 관계 깊이 점수 (Q3, Q4, Q9)
  let depth = 0
  if (answers[2] === 0 || answers[2] === 1) depth += 2 // Q3: a,b
  if (answers[2] === 3) depth += 2 // Q3: d
  if (answers[3] === 0 || answers[3] === 3) depth += 2 // Q4: a,d
  if (answers[8] === 2 || answers[8] === 3) depth += 2 // Q9: c,d
  
  // 소통 스타일 점수 (Q2, Q6)
  let talk = 0
  if (answers[1] === 0 || answers[1] === 2) talk += 3 // Q2: a,c
  if (answers[5] === 1 || answers[5] === 3) talk += 3 // Q6: b,d
  
  // 결과 결정
  if (depth >= 4 && talk >= 3) return 'deep-talker'
  if (depth >= 4 && talk < 3) return 'calm-romantic'
  if (depth < 4 && talk >= 3) return 'energetic-connector'
  return 'free-explorer'
}
```

---

## 9. 결과 페이지 (/result/[type])

### Type A: deep-talker

```
┌─────────────────────────────┐
│        💬                   │
│   당신은 진중한 대화가!       │
│                             │
├─────────────────────────────┤
│                             │
│  당신은 외모나 스펙보다       │
│  '대화가 통하는 사람'을       │
│  찾는 타입이에요.            │
│                             │
│  연애는 많이 하는 게 아니라   │
│  한 명과의 의미있는 시간이    │
│  더 소중하다고 생각해요.      │
│                             │
├─────────────────────────────┤
│  ✨ 잘 맞는 유형             │
│  진중한 대화가, 차분한 감성러 │
│                             │
│  💡 연애 팁                 │
│  • 조용한 카페 2-3시간 대화  │
│  • 가치관 이야기 나누기      │
│  • 너무 빨리 여러 명 만나지 X │
│                             │
├─────────────────────────────┤
│  📊 한밭대 통계              │
│  전체 응답자 중 32% (89명)   │
│  한밭대에서 가장 많은 유형!   │
│  [더보기 ▼]                 │
│                             │
├─────────────────────────────┤
│                             │
│  [친구에게 공유하기 버튼]     │
│                             │
├─────────────────────────────┤
│                             │
│  💡 이런 생각 해본 적 있나요? │
│                             │
│  "나랑 대화 통하는 사람       │
│   어디 없을까?"              │
│                             │
│  썸타임은 당신처럼            │
│  의미있는 인연을 찾는         │
│  대학생을 위한 앱이에요       │
│                             │
│  ✓ 학생 팀이 직접 매칭       │
│  ✓ 외모 평가 없이           │
│  ✓ 대전/세종 대학생만        │
│                             │
│  [썸타임에서 인연 만나기]     │
│  (테스트 결과 자동 반영)      │
│                             │
│  썸타임 더 알아보기 →        │
│                             │
└─────────────────────────────┘
```

### Type B: calm-romantic

```
💙 차분한 감성러

당신은 화려한 데이트보다
소소하고 편안한 시간을 선호해요.

천천히 알아가며 친구부터 시작하는,
"특별한 한 사람"이 되고 싶어하는 타입.

✨ 잘 맞는 유형
진중한 대화가, 차분한 감성러

💡 연애 팁
• 산책하며 천천히 대화
• 일상 이야기부터 자연스럽게
• 첫 만남에 너무 많은 질문 X

📊 한밭대 통계
전체 응답자 중 28% (76명)
한밭대에서 2번째로 많은 유형!
```

### Type C: energetic-connector

```
⚡ 활발한 에너자이저

당신은 함께 있으면 즐거운 사람을
찾는 타입이에요.

무거운 대화보다 웃음이 오가고,
다양한 활동을 함께 하며
자연스럽게 가까워지는 걸 선호해요.

✨ 잘 맞는 유형
활발한 에너자이저, 자유로운 모험가

💡 연애 팁
• 맛집 투어, 방탈출 등 활동적 데이트
• 가벼운 TMI, 재밌었던 일 공유
• 첫 만남부터 너무 진지한 분위기 X

📊 한밭대 통계
전체 응답자 중 24% (67명)
한밭대에서 3번째로 많은 유형!
```

### Type D: free-explorer

```
🌟 자유로운 모험가

당신은 틀에 박힌 연애보다
자유롭고 솔직한 관계를 원해요.

"이래야 한다"는 기준보다
서로가 편한 게 최우선이고,
우리만의 방식으로 관계를
만들어가고 싶어 해요.

✨ 잘 맞는 유형
활발한 에너자이저, 자유로운 모험가

💡 연애 팁
• 처음 가보는 카페, 팝업스토어 탐방
• "우리 이거 해볼까?" 제안하기
• 너무 계획적이고 틀에 박힌 데이트 X

📊 한밭대 통계
전체 응답자 중 16% (45명)
한밭대에서 가장 특별한 유형!
```

---

## 10. 통계 더보기 (하드코딩)

```
📊 한밭대 연애 유형 분포
(총 277명 참여)

1위: 진중한 대화가 (89명, 32%)
     💬💬💬💬💬💬💬 32%

2위: 차분한 감성러 (76명, 28%)
     💙💙💙💙💙💙 28%

3위: 활발한 에너자이저 (67명, 24%)
     ⚡⚡⚡⚡⚡ 24%

4위: 자유로운 모험가 (45명, 16%)
     🌟🌟🌟 16%

━━━━━━━━━━━━━━━━━━━

💡 한밭대생의 특징
• 대화 중심 유형이 60%로 가장 많음
• 진지한 관계를 원하는 비율 높음
• 활동적 유형은 상대적으로 적음
```

---

## 11. 썸타임 연결 섹션

```
━━━━━━━━━━━━━━━━━━━

💡 이런 생각 해본 적 있으신가요?

"나랑 대화 통하는 사람 어디 없을까?"
"소개팅 앱은 너무 가볍고 부담스러운데..."
"한밭대나 근처 대학 사람이랑만 만나고 싶은데"

━━━━━━━━━━━━━━━━━━━

썸타임은 당신처럼
"의미있는 한 번의 인연"을 찾는
대학생을 위한 앱이에요.

✓ AI가 아닌, 학생 개발팀이 직접 매칭
✓ 외모 평가 없이, 대화가 통할 사람으로
✓ 대전/세종 대학생만 (실제 만남 가능)

━━━━━━━━━━━━━━━━━━━

당신과 같은 [진중한 대화가] 유형
또는 잘 맞는 [차분한 감성러] 유형의
한밭대/충남대/대전대생과
실제로 매칭받고 싶다면?

┌──────────────────────────┐
│  썸타임에서 진짜 인연 만나기  │
│  (테스트 결과 자동 반영)     │
└──────────────────────────┘
큰 버튼, 포인트 컬러

썸타임이 궁금하다면? 더 알아보기 →

━━━━━━━━━━━━━━━━━━━

"이 테스트 결과를 썸타임에서
 매칭 정확도를 높이는 데 활용해요"

처음 가입하시는 분께는
테스트 결과를 반영한
특별 매칭을 제공해드려요.
```

---

## 12. 공유 기능

### 카카오톡 공유

```javascript
// Kakao SDK 사용
Kakao.Link.sendDefault({
  objectType: 'feed',
  content: {
    title: '나는 진중한 대화가!',
    description: '너는 어떤 유형? 한밭대생 연애 테스트',
    imageUrl: 'https://test.sometime.im/og-image.png',
    link: {
      mobileWebUrl: 'https://test.sometime.im/start',
      webUrl: 'https://test.sometime.im/start',
    },
  },
})
```

### 링크 복사

```javascript
navigator.clipboard.writeText('https://test.sometime.im/start')
// 토스트: "링크가 복사되었어요!"
```

**공유 버튼 위치:** 결과 유형 설명 바로 아래

```
[카카오톡으로 공유] [링크 복사]
```

---

## 13. 스타일 가이드

### 컬러

```css
Primary: #FF6B9D (핑크)
Secondary: #6366F1 (인디고)
Background: #FFFFFF
Text: #1F2937
Light Gray: #F3F4F6
```

### 타이포그래피

```css
제목: 24px, Bold, -0.02em
본문: 16px, Regular, -0.01em, line-height 1.6
작은 텍스트: 14px, Regular
```

### 버튼

```css
Primary Button:
- Background: #FF6B9D
- Color: #FFFFFF
- Padding: 16px 24px
- Border-radius: 12px
- Font-size: 16px, Bold

Secondary Button:
- Background: #F3F4F6
- Color: #1F2937
- 나머지 동일
```

### 카드

```css
Background: #FFFFFF
Border-radius: 16px
Padding: 24px
Box-shadow: 0 2px 8px rgba(0,0,0,0.08)
```

---

## 14. 파일 구조

```
/app
  /start
    page.tsx          → 시작 화면
  /question
    /[id]
      page.tsx        → 질문 페이지
  /result
    /[type]
      page.tsx        → 결과 페이지
  /api
    /og
      route.tsx       → OG 이미지 (선택)

/components
  Progress.tsx        → 프로그레스바
  QuestionCard.tsx    → 질문 카드
  ResultCard.tsx      → 결과 카드
  ShareButtons.tsx    → 공유 버튼
  StatsSection.tsx    → 통계 섹션

/lib
  questions.ts        → 질문 데이터
  results.ts          → 결과 데이터
  calculator.ts       → 결과 계산 로직

/public
  og-image.png        → OG 이미지
```

---

## 15. 데이터 구조

### questions.ts

```typescript
export const questions = [
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
  // ... 나머지 9개
]
```

### results.ts

```typescript
export const results = {
  'deep-talker': {
    emoji: '💬',
    title: '진중한 대화가',
    subtitle: 'Deep Talker',
    description: '당신은 외모나 스펙보다...',
    compatibility: ['진중한 대화가', '차분한 감성러'],
    tips: [
      '조용한 카페에서 2-3시간 대화',
      '가치관 이야기 나누기',
      '너무 빨리 여러 명 만나지 않기',
    ],
    stats: {
      percentage: 32,
      count: 89,
      rank: 1,
    },
  },
  // ... 나머지 3개
}
```

---

## 16. 핵심 컴포넌트

### QuestionCard.tsx

```typescript
interface Option {
  value: number
  label: string
}

interface QuestionCardProps {
  question: string
  options: Option[]
  onSelect: (value: number) => void
}

export default function QuestionCard({
  question,
  options,
  onSelect,
}: QuestionCardProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{question}</h2>
      
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className="w-full p-4 text-left rounded-xl 
                       bg-gray-50 hover:bg-pink-50 
                       transition-colors"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
```

### Progress.tsx

```typescript
interface ProgressProps {
  current: number
  total: number
}

export default function Progress({ current, total }: ProgressProps) {
  const percentage = (current / total) * 100
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{total}개 중 {current}번째</span>
        <span>{Math.round(percentage)}%</span>
      </div>
      
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-pink-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
```

---

## 17. 배포 설정

### Vercel 배포

1. GitHub 연결
2. 프로젝트 import
3. 자동 배포 설정

**도메인:**
```
test.sometime.im
```

**환경 변수:** 없음 (필요 없음)

---

## 18. OG 이미지

### 메타 태그

```typescript
// app/layout.tsx
export const metadata = {
  title: '한밭대생 연애 유형 테스트',
  description: '나는 어떤 연애 스타일일까? 2분 테스트',
  openGraph: {
    title: '한밭대생 연애 유형 테스트',
    description: '나는 어떤 연애 스타일일까?',
    images: ['/og-image.png'],
  },
}
```

### 이미지 사이즈

```
1200 x 630px (OG 표준)
내용: "한밭대생 연애 유형 테스트" + 썸타임 로고
```

---

## 19. 에타 게시글

### 제목

```
심심해서 만든 한밭대생 연애 유형 테스트ㅋㅋ
```

### 본문

```
심심해서 친구들이랑 만들어봤는데
생각보다 재밌어서 공유해요 ㅋㅋ

10개 질문 / 2분 걸림
결과 4가지 중 하나 나옴

나는 [진중한 대화가] 나왔는데
한밭대에서 1위로 많은 유형이래요

너네는 뭐 나와?
댓글로 공유 ㄱㄱ

https://test.sometime.im/start

---
*광고 아니고 진짜 학생들이 만든 거예요
*개인정보 수집 안 함
*재밌게 하셨다면 공유 부탁드려요!
```

### 게시 타이밍

- 평일 점심 (12:00-13:00)
- 또는 저녁 (19:00-21:00)

---

## 20. 성공 지표

### 목표 (1주일)

```
최소: 100명 참여 → 10명 가입
목표: 500명 참여 → 50명 가입
대박: 1,000명+ 참여 → 100명+ 가입
```

### 측정 방법

**Google Analytics 4 설치**

```javascript
// 이벤트 트래킹
gtag('event', 'test_start')
gtag('event', 'test_complete', { result_type: 'deep-talker' })
gtag('event', 'click_sometime', { result_type: 'deep-talker' })
gtag('event', 'share_kakao')
```

---

## 21. 개발 체크리스트

### Day 1
- [ ] Next.js 프로젝트 생성
- [ ] 시작 화면 UI
- [ ] 질문 페이지 10개
- [ ] 답변 저장 로직 (URL 파라미터)
- [ ] 결과 계산 함수
- [ ] 프로그레스바

### Day 2
- [ ] 결과 페이지 4가지
- [ ] 통계 섹션 (하드코딩)
- [ ] 썸타임 연결 섹션
- [ ] 공유 기능 (카톡, 링크)
- [ ] 모바일 반응형
- [ ] OG 이미지
- [ ] Vercel 배포

---

## 22. 런칭 전 체크리스트

- [ ] 모든 질문 오타 확인
- [ ] 결과 계산 로직 테스트
- [ ] 모바일 Safari 테스트
- [ ] 모바일 Chrome 테스트
- [ ] 카카오톡 공유 테스트
- [ ] 링크 복사 기능 테스트
- [ ] 썸타임 앱 링크 확인
- [ ] 로딩 속도 확인 (3초 이내)
- [ ] 에타 게시글 작성 완료

---

## 완료

**이 PRD로 2일 내 개발 → 배포 → 에타 게시 가능합니다.**

추가 질문 있으면 바로 답변 드릴게요!