import React, { useState, useEffect } from 'react';
import Footer from '../actual/Footer';
import Header from '../actual/Header';
import styles from '../../css/myfile.module.css';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import profilePic from '../../images/psl.jpg'; // Example profile picture
import favoriteTeamPic from '../../images/psl.jpg'; // Example team picture
import { FaArrowUp } from 'react-icons/fa';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  const userName = "Amna"; // Example user name
  const predictions = [
    { id: 1, match: "Team A vs Team B", status: "Ongoing", successRate: "75%" },
    { id: 2, match: "Team C vs Team D", status: "Completed", successRate: "85%" }
  ];

  const favoriteTeams = [
    { id: 1, teamName: "Team A", pic: favoriteTeamPic },
    { id: 2, teamName: "Team B", pic: favoriteTeamPic }
  ];

  const handleLogout = () => {
    // Add your logout logic here
    alert("Logged out successfully!");
  };

  const [showArrow, setShowArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sample data for prediction success rates
  const predictionSuccessRateData = {
    labels: ['Successful Predictions', 'Unsuccessful Predictions'],
    datasets: [
      {
        label: 'Success Rate',
        data: [75, 25],
        backgroundColor: ['#50a490', '#6699ab'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  // Sample data for prediction success rates with 6 teams
  const MatchesStats = {
    labels: ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5', 'Team 6'],
    datasets: [
      {
        label: 'Success Rate',
        data: [15, 10, 20, 25, 18, 12],
        backgroundColor: ['#50a490', '#6699ab', '#ffab00', '#ff6f61', '#6d6e71', '#4b5d67'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  // Sample data for team performance over time
  const teamPerformanceData = {
    labels: ['Team A', 'Team B', 'Team C'],
    datasets: [
      {
        label: 'Performance',
        data: [70, 80, 90],
        backgroundColor: ['#50a490', '#6699ab', '#6d6e71'],
        borderColor: '#fff',
        borderWidth: 2
      }
    ]
  };

  return (
    <div>
      <Header />
      <MDBContainer className={styles.dashboardContainer}>
        <MDBRow className="mb-4">
          <MDBCol md="4" sm="12">
            <MDBCard className={`${styles.profileCard} shadow-sm`} style={{ backgroundColor: '#ffffff' }}>
              <MDBCardBody>
                <div className={styles.profileHeader}>
                  <img src={profilePic} alt="Profile" className={styles.profilePic} />
                  <h3 className={styles.userName}>Welcome, {userName}</h3>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="8" sm="12">
            <MDBCard className={`${styles.infoCard} shadow-sm`}>
              <MDBCardBody>
                <MDBCardTitle>Dashboard Overview</MDBCardTitle>
                <MDBCardText>
                  <p>Welcome to your personalized dashboard! Here you can track your predictions, view your favorite teams, and manage your profile.</p>
                  <p>Your predictions help you track and analyze match outcomes. Keep an eye on the success rates and improve your predictions over time.</p>
                  <p>Your favorite teams and players are listed here for quick access to their profiles and updates.</p>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-4">
          <MDBCol md="6" sm="12">
            <MDBCard className={`${styles.predictionCard} shadow-sm`} style={{ backgroundColor: '#ffffff' }}>
              <MDBCardBody>
                <MDBCardTitle>My Predictions</MDBCardTitle>
                <MDBTable className={styles.table}>
                  <MDBTableHead>
                    <tr>
                      <th>#</th>
                      <th>Match</th>
                      <th>Status</th>
                      <th>Success Rate</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {predictions.map(pred => (
                      <tr key={pred.id}>
                        <td>{pred.id}</td>
                        <td>{pred.match}</td>
                        <td className={pred.status === "Ongoing" ? styles.blink : ''}>{pred.status}</td>
                        <td>{pred.successRate}</td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="6" sm="12">
            <MDBCard className={`${styles.favoritesCard} shadow-sm`} style={{ backgroundColor: '#ffffff' }}>
              <MDBCardBody>
                <MDBCardTitle>Favorite Teams/Players</MDBCardTitle>
                <MDBTable className={styles.table}>
                  <MDBTableHead>
                    <tr>
                      <th>#</th>
                      <th>Team/Player</th>
                      <th>Image</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    {favoriteTeams.map(team => (
                      <tr key={team.id}>
                        <td>{team.id}</td>
                        <td>{team.teamName}</td>
                        <td><img src={team.pic} alt={team.teamName} className={styles.teamPic} /></td>
                      </tr>
                    ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>

        
        <MDBRow className="mb-4">
          <MDBCol>
            <div className={styles.chartContainer}>
              <MDBCard className={`${styles.chartCard} shadow-sm`} style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardBody>
                  <MDBCardTitle>Prediction Success Rates</MDBCardTitle>
                  <Pie data={predictionSuccessRateData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }} />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className={`${styles.chartCard} shadow-sm`} style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardBody>
                  <MDBCardTitle>Matches Stats</MDBCardTitle>
                  <Pie data={MatchesStats} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}%` } } } }} />
                </MDBCardBody>
              </MDBCard>
              <MDBCard className={`${styles.chartCard} shadow-sm`} style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardBody>
                  <MDBCardTitle>Team Performance</MDBCardTitle>
                  <Pie data={teamPerformanceData} options={{ responsive: true, plugins: { legend: { position: 'top' }, tooltip: { callbacks: { label: (context) => `${context.label}: ${context.raw}` } } } }} />
                </MDBCardBody>
              </MDBCard>
            </div>
          </MDBCol>
        </MDBRow>
        {showArrow && (
          <div className={styles.scrollToTop} onClick={handleScrollToTop}>
            <FaArrowUp />
          </div>
        )}

      </MDBContainer>
      <Footer />
    </div>
  );
}
