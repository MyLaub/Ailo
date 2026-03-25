// components/demoSteps.ts
export type DemoStep = {
  id: string;
  typedText: string; // teksten der skrives i input
  resultImg?: string; // valgfrit: screenshot efter "kørsel"
};

export const demoSteps: DemoStep[] = [
  {
    id: "q1",
    typedText: "How does my campaigns correlate with sales?",
    resultImg: "/demo/demo1.png",
  },
  {
    id: "q2",
    typedText: "Show me the top 3 weeks with highest ROAS.",
    resultImg: "/demo/demo2.png",
  },
  {
    id: "q3",
    typedText: "What happens if I reduce Meta spend by 15%?",
    resultImg: "/demo/demo3.png",
  },
];
