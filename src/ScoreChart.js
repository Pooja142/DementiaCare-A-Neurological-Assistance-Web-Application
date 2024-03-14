import React, { useState, useEffect, useRef } from 'react';
import {Chart,LinearScale } from 'chart.js/auto';
import { db } from './firebase';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
const ScoreSentiment = () => {
  const [sentimentScores, setSentimentScores] = useState([]);

  useEffect(() => {
    const scoresCollection = db.collection('scores');
    scoresCollection.get()
      .then((querySnapshot) => {
        const scores = [];
        querySnapshot.forEach((doc) => {
          scores.push({
            id: doc.id,
            sentiment: doc.data().sentiment,
            score: doc.data().score,
          });
        });
        setSentimentScores(scores);
      })
      .catch((error) => {
        console.error('Error fetching scores: ', error);
      });
  }, []);

  const canvasRef = useRef(null);

  useEffect(() => {
    if (sentimentScores.length > 0) {
      const ctx = canvasRef.current.getContext('2d');
      const labels = ['Positive', 'Neutral', 'Negative'];
      const data = [
        sentimentScores.filter(score => score.score > 5 ).length,
        sentimentScores.filter(score => score.score === 0).length,
        sentimentScores.filter(score => score.score < 5 && score.score !== 0).length,
      ];
      const backgroundColors = [
        'rgba(75, 192, 205)',
        'rgba(255, 234, 132)',
        'rgba(255, 22, 55)',
      ];
      const borderColors = [
        'rgba(255, 255, 255)',
        'rgba(255, 255, 255)',
        'rgba(255, 255, 255)',
      ];

      Chart.register(LinearScale);
      Chart.defaults.font.family = 'Arial';
      Chart.defaults.font.size = 16;
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Sentiment Analysis Score',
              data,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                font: {
                  size: 18,
                  weight: 'bold'
                }
              }
            },
            title: {
              display: true,
              text: 'Sentiment Analysis Scores',
              font: {
                size: 24,
                weight: 'bold'
              }
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1,
                font: {
                  size: 14,
                  weight: 'bold'
                }
              },
              grid: {
                display: false
              }
            },
            x: {
              ticks: {
                font: {
                  size: 14,
                  weight: 'bold'
                }
              },
              grid: {
                display: false
              }
            }
          }
        },
      });

      return () => {
        chart.destroy();
      };
    }
  }, [sentimentScores]);

  return (
    <div>
      {/* <h2>Sentiment Scores</h2> */}
      {/* <ul>
        {sentimentScores.map((score) => (
          <li key={score.id}>
            Score: {score.score} - Sentiment: {score.sentiment}
          </li>
        ))}
      </ul> */}{" "}
      <Link to="/quiz">
        <BsArrowLeft /> Back
      </Link>
      <canvas ref={canvasRef} style={{ width: "50%", height: "auto" }}></canvas>
    </div>
  );
};

export default ScoreSentiment;
