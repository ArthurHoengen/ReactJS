import React from 'react';
import highScores from './highScores';
import styles from './styles/HighScore.module.css'

export default function HighScore() {
  return (
    <div className={styles.div}>
      {highScores.map((highScore, i) =>
        <div>
          <h3>Player {i + 1}</h3>
          <p>Username: {highScore.username}</p>
          <p>Date: {highScore.date}</p>
          <p>Score: {highScore.score}</p>
        </div>
      )}
    </div>
  );
}