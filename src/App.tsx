import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import * as anchor from '@project-serum/anchor';
import './App.css';
import { encodeURL } from './encodeURL';
import { createQR } from './createQR';
import BigNumber from 'bignumber.js'

const CUSTOMER_WALLET = new anchor.web3.PublicKey(
  "2uiQx1XG7Ljc8PnrFYKtLWU5UZ2UtYj1PuRG9B3m7ThA"
);

const MERCHANT_WALLET = new anchor.web3.PublicKey(
  "512CDVq78BQpKxb6RyPa9pYiqU2Z8jr7XYaUWBQrYwHt"
);

function App() {
  const amount = new BigNumber(0.01);
  const reference = CUSTOMER_WALLET
  const label = 'Jungle Cats store';
  const message = 'Jungle Cats store - your order - #001234';
  const memo = 'JC#4098';

  const url = encodeURL({ recipient: MERCHANT_WALLET, amount, reference, label, message, memo });
  const qrCode = createQR(url);

  useEffect(() => {
    // get a handle of the element
    const element = document.getElementById('qr-code')!;
    // append QR code to the element
    qrCode.append(element);
  },[])

  return (
    <div className="App">
      <p>penis</p>
      <div id="qr-code"></div>
    </div>
  );
}

export default App;
