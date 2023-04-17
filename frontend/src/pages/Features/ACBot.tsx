import React from 'react';
import Navbar from '../../components/Navbar';
import { ChatGpt } from '../../components/ChatGpt';

export default function ACBot() {
  return (
    <div>
      <Navbar isLanding={false} />
      {/* <p>Aggie Compute Bot</p> */}

      <ChatGpt />
    </div>
  );
}
