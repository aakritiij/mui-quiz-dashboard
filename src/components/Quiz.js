import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { useState } from "react";

function Quiz({ title, questions }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  };

  return (
    <Card className="dashboard-card">
      <CardContent>
        <Typography variant="h5" className="section-title">
          {title}
        </Typography>

        {finished ? (
          <Typography>
            Quiz Completed. Score: {score} / {questions.length}
          </Typography>
        ) : (
          <>
            <Typography sx={{ mb: 2 }}>
              {questions[current].question}
            </Typography>

            <Stack spacing={1}>
              {questions[current].options.map((opt, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  onClick={() => handleAnswer(opt.correct)}
                >
                  {opt.text}
                </Button>
              ))}
            </Stack>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Quiz;
