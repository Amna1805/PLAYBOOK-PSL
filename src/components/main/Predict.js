import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';
import team1Image from '../../images/psl.jpg'; // Placeholder image
import team2Image from '../../images/psl.jpg'; // Placeholder image
import Header from '../actual/Header';
import Footer from '../actual/Footer';
import { MDBBtn } from 'mdb-react-ui-kit';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function Predict() {
  // Static data for match details
  const matchDetails = {
    team1: {
      name: "Team A",
      image: team1Image,
      wickets: 8,
      runs: 220,
      balls: 120
    },
    team2: {
      name: "Team B",
      image: team2Image,
      wickets: 10,
      runs: 180,
      balls: 120
    }
  };

  // Sample data for previous performance
  const previousPerformanceData = {
    labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4'],
    datasets: [
      {
        label: 'Team A Performance',
        data: [85, 78, 90, 88],
        backgroundColor: '#50a490',
        borderColor: '#fff',
        borderWidth: 2
      },
      {
        label: 'Team B Performance',
        data: [80, 82, 85, 87],
        backgroundColor: '#ff6f61',
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  // Sample data for votes
  const voteDistributionData = {
    labels: ['Votes for Win', 'Votes for Loss'],
    datasets: [
      {
        label: 'Votes',
        data: [70, 30],
        backgroundColor: ['#50a490', '#ff6f61'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  // Sample data for win probability
  const winProbabilityData = {
    labels: ['Team A', 'Team B'],
    datasets: [
      {
        label: 'Win Probability (%)',
        data: [65, 35],
        backgroundColor: ['#50a490', '#ff6f61'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  return (
    <div>
      <Header />
      <MDBContainer className="my-4">
        <MDBRow className="mb-3">
          {/* Match Details and Vote Distribution in two columns */}
          <MDBCol md="6" sm="12" className="mb-3">
            <MDBCard className="shadow-sm custom-card">
              <MDBCardBody>
                <MDBCardTitle>Match Details</MDBCardTitle>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol md="6" sm="12" className="mb-3">
                      <img src={matchDetails.team1.image} alt={matchDetails.team1.name} style={{ width: '80%' }} />
                      <h5>{matchDetails.team1.name}</h5>
                      <p>Wickets: {matchDetails.team1.wickets}</p>
                      <p>Runs: {matchDetails.team1.runs}</p>
                      <p>Balls: {matchDetails.team1.balls}</p>
                    </MDBCol>
                    <MDBCol md="6" sm="12" className="mb-3">
                      <img src={matchDetails.team2.image} alt={matchDetails.team2.name} style={{ width: '80%' }} />
                      <h5>{matchDetails.team2.name}</h5>
                      <p>Wickets: {matchDetails.team2.wickets}</p>
                      <p>Runs: {matchDetails.team2.runs}</p>
                      <p>Balls: {matchDetails.team2.balls}</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBBtn color="success" className="me-2">Vote for Win</MDBBtn>
                  <MDBBtn color="danger">Vote for Loss</MDBBtn>
                </MDBCardBody>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" sm="12" className="mb-3">
            <MDBCard className="shadow-sm custom-card">
              <MDBCardBody>
                <MDBCardTitle>Vote Distribution</MDBCardTitle>
                <div style={{ height: '300px' }}> {/* Adjust height as needed */}
                  <Pie data={voteDistributionData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          {/* Previous Performance and Win Probability in two columns */}
          <MDBCol md="6" sm="12" className="mb-3">
            <MDBCard className="shadow-sm custom-card">
              <MDBCardBody>
                <MDBCardTitle>Previous Performance</MDBCardTitle>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th>Match</th>
                      <th>Team A Performance</th>
                      <th>Team B Performance</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td>Match 1</td>
                      <td>85</td>
                      <td>80</td>
                    </tr>
                    <tr>
                      <td>Match 2</td>
                      <td>78</td>
                      <td>82</td>
                    </tr>
                    <tr>
                      <td>Match 3</td>
                      <td>90</td>
                      <td>85</td>
                    </tr>
                    <tr>
                      <td>Match 4</td>
                      <td>88</td>
                      <td>87</td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" sm="12" className="mb-3">
            <MDBCard className="shadow-sm custom-card">
              <MDBCardBody>
                <MDBCardTitle>Win Probability</MDBCardTitle>
                <div style={{ height: '300px' }}> {/* Adjust height as needed */}
                  <Bar data={winProbabilityData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          <MDBCol>
            <MDBCard className="shadow-sm custom-card">
              <MDBCardBody>
                <MDBCardTitle>Team Performance</MDBCardTitle>
                <div style={{ height: '300px' }}> {/* Adjust height as needed */}
                  <Bar data={previousPerformanceData} options={{ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}` } } } }} />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}
