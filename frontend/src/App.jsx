import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as XLSX from 'xlsx';
import { Device } from '@twilio/voice-sdk';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';
import { 
  Zap, 
  Shield, 
  Globe, 
  BarChart3, 
  PhoneCall, 
  Settings, 
  Users, 
  CreditCard, 
  Play,
  CheckCircle2,
  Quote,
  LayoutDashboard,
  Target,
  FileSearch,
  Bot,
  UserCheck,
  LineChart,
  Contact2,
  AlertCircle,
  Sun,
  Moon,
  ChevronRight,
  Terminal,
  LifeBuoy,
  Smile,
  Frown,
  Volume2,
  StopCircle,
  Activity,
  Pause,
  Square,
  RefreshCw
} from 'lucide-react';
import './App.css';

const LandingPage = ({ onGoToDashboard, onGoToLogin, theme, toggleTheme }) => {
  return (
    <div className="app-shell landing-shell">
      {/* Navbar */}
      <nav className="navbar" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px 0'}}>
        <div className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '800', fontSize: '1.2rem'}}>
          <div style={{width: '32px', height: '32px', background: 'var(--accent-iris)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Zap size={18} fill="currentColor" />
          </div>
          <span>ANTIGRAVIITY</span>
        </div>
        <div className="nav-links" style={{display: 'flex', alignItems: 'center', gap: '30px', fontWeight: '500'}}>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="btn-secondary" onClick={onGoToLogin} style={{padding: '10px 20px'}}>Login</button>
          <button className="btn-primary" onClick={onGoToDashboard}>Get Started</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="prism-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">NEXT GENERATION AI AGENTS</div>
          <h1 className="hero-title">Experience <br /> Deep Intelligence.</h1>
          <p className="subtext" style={{maxWidth: '650px', margin: '0 auto 40px', fontSize: '1.15rem'}}>
            Autonomously handle thousands of simultaneous calls with proprietary empathy-driven NLP models. 
            Built for enterprise scale and human-like precision.
          </p>
          <div style={{display: 'flex', justifyContent: 'center', gap: '24px'}}>
            <button className="btn-primary" style={{padding: '16px 36px', fontSize: '1.1rem'}} onClick={onGoToDashboard}>
              Launch Dashboard <ChevronRight size={20} />
            </button>
            <button className="btn-secondary" style={{padding: '16px 36px', fontSize: '1.1rem'}}>
              Read Documentation
            </button>
          </div>
        </motion.div>
      </header>

      {/* Bento Showcase */}
      <section className="bento-grid" style={{marginTop: '40px', marginBottom: '120px'}}>
        <div className="bento-card wide silk-card" style={{padding: '50px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '20px'}}>Multi-Language Fluidity</h3>
          <p className="subtext">Zero-latency context switching between 50+ global languages, including specialized regional dialects like Tamil, Hindi, and Spanish.</p>
        </div>
        <div className="bento-card tall silk-card" style={{padding: '50px', background: 'var(--bg-tertiary)', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h3 style={{fontSize: '1.8rem', marginBottom: '20px'}}>Real-time Monitoring</h3>
          <p className="subtext">Watch calls happen live with instant transcription and strategic handover triggers for human supervisors.</p>
        </div>
        <div className="bento-card silk-card" style={{padding: '40px', textAlign: 'center'}}>
          <Shield className="text-iris" size={40} style={{marginBottom: '24px'}} />
          <h4>GDPR Compliant</h4>
        </div>
        <div className="bento-card silk-card" style={{padding: '40px', textAlign: 'center'}}>
          <Zap className="text-rose" size={40} style={{marginBottom: '24px'}} />
          <h4>&lt; 200ms Latency</h4>
        </div>
      </section>
    </div>
  );
};

const LoginPage = ({ onLoginSuccess, onBack, theme, toggleTheme }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      if (email === 'admin@antigraviity.ai' && password === 'admin') {
        onLoginSuccess();
      } else {
        setError('Invalid credentials. Access Denied.');
      }
      setLoading(false);
    }, 800); // 0.8s for smooth feel
  };

  return (
    <div className="app-shell" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '20px'}}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="silk-card" 
        style={{maxWidth: '440px', width: '100%', padding: '48px', textAlign: 'center'}}
      >
        <div className="logo" style={{display: 'inline-flex', alignItems: 'center', gap: '10px', fontWeight: '800', fontSize: '1.4rem', marginBottom: '40px'}}>
          <div style={{width: '36px', height: '36px', background: 'var(--accent-iris)', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}>
            <Zap size={20} fill="currentColor" />
          </div>
          <span>ANTIGRAVIITY</span>
        </div>
        
        <h2 style={{fontSize: '1.8rem', marginBottom: '8px'}}>Welcome Back</h2>
        <p className="subtext" style={{marginBottom: '32px'}}>Sign in to manage your AI workforce</p>

        <AnimatePresence>
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              style={{background: 'rgba(244, 63, 94, 0.05)', color: 'var(--accent-rose)', padding: '12px', borderRadius: '10px', fontSize: '0.85rem', marginBottom: '24px', border: '1px solid rgba(244, 63, 94, 0.1)'}}
            >
              <AlertCircle size={14} style={{verticalAlign: 'middle', marginRight: '6px'}} />
              {error}
              <div style={{fontSize: '0.7rem', marginTop: '4px', opacity: 0.7}}>Try: admin@antigraviity.ai / admin</div>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} style={{textAlign: 'left'}}>
          <div style={{marginBottom: '20px'}}>
            <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)'}}>Email Address</label>
            <input 
              type="email" 
              className="silk-card" 
              style={{width: '100%', padding: '14px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '12px'}}
              value={email}
              placeholder="admin@antigraviity.ai"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{marginBottom: '20px', position: 'relative'}}>
            <label style={{display: 'block', fontSize: '0.85rem', marginBottom: '8px', color: 'var(--text-secondary)'}}>Password</label>
            <input 
              type={showPassword ? "text" : "password"}
              className="silk-card" 
              style={{width: '100%', padding: '14px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '12px'}}
              value={password}
              placeholder="••••••••"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{position: 'absolute', right: '14px', top: '38px', background: 'none', color: 'var(--text-muted)'}}
            >
              {showPassword ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px'}}>
            <label style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)', cursor: 'pointer'}}>
              <input type="checkbox" style={{accentColor: 'var(--accent-iris)'}} /> Remember me
            </label>
            <span style={{fontSize: '0.85rem', color: 'var(--accent-iris)', cursor: 'pointer', fontWeight: 500}}>Forgot Password?</span>
          </div>

          <button type="submit" className="btn-primary" style={{width: '100%', justifyContent: 'center', padding: '16px'}} disabled={loading}>
            {loading ? 'Authenticating...' : 'Sign In to Portal'}
          </button>
        </form>

        <button className="btn-secondary" onClick={onBack} style={{marginTop: '24px', width: '100%', background: 'transparent', border: 'none'}}>
          Back to Homepage
        </button>

        <div style={{marginTop: '32px'}}>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Dashboard = ({ onBack, theme, toggleTheme }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [stats] = useState({
    totalCalls: '12,842',
    avgResolution: '3m 12s',
    csat: '4.8/5',
    activeAgents: '12'
  });
  const [micLevel, setMicLevel] = useState(0);
  const [remoteMicLevel, setRemoteMicLevel] = useState(0);
  const audioContextRef = useRef(null);
  const analyzerRef = useRef(null);
  const [inCall, setInCall] = useState(false);
  const [dialedNumber, setDialedNumber] = useState('');
  const [callDuration, setCallDuration] = useState(0);
  const [isCreatingCampaign, setIsCreatingCampaign] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [transferredAgent, setTransferredAgent] = useState(null);

  const [humanAgents] = useState([
    { name: 'Alex G.', skill: 'High-Ticket Closing', rate: '92%', stat: 'Online' },
    { name: 'Sarah L.', skill: 'Technical Support', rate: '85%', stat: 'In-Call' },
    { name: 'Michael K.', skill: 'Dispute Resolution', rate: '78%', stat: 'Offline' },
  ]);

  const [tickets, setTickets] = useState([
    { id: 'TKT-9921', subject: 'API Latency in Chennai Region', status: 'In-Progress', priority: 'High', date: '2h ago' },
    { id: 'TKT-9918', subject: 'Billing Statement Discrepancy', status: 'Resolved', priority: 'Medium', date: '1d ago' },
  ]);
  const [isRaisingTicket, setIsRaisingTicket] = useState(false);
  const [newTicket, setNewTicket] = useState({ subject: '', category: 'General', description: '' });

  // Batch Dialing States
  const [batchLeads, setBatchLeads] = useState([]);
  const [isBatchActive, setIsBatchActive] = useState(false);
  const [currentLeadIndex, setCurrentLeadIndex] = useState(-1);
  const [batchCountdown, setBatchCountdown] = useState(0);
  const [isWaitingNext, setIsWaitingNext] = useState(false);
  const [isBatchPaused, setIsBatchPaused] = useState(false);
  const [sentiment, setSentiment] = useState(85);
  const [playingVoice, setPlayingVoice] = useState(null);
  const [callLogs, setCallLogs] = useState([
    { time: '10:42 AM', id: '#AX-7721', user: 'Robert Fox', out: 'Converted', sum: 'Customer agreed to demo next Tuesday.' },
    { time: '09:15 AM', id: '#AX-7720', user: 'Jane Cooper', out: 'Follow-up', sum: 'Requested human call in the evening.' },
  ]);

  const [telephonyStatus, setTelephonyStatus] = useState('OFFLINE');
  const [device, setDevice] = useState(null);
  const [activeCall, setActiveCall] = useState(null);

  const resetMicrophone = async () => {
    if (!activeCall) return;
    try {
      console.log("🎤 Attempting Hard Mic Reset...");
      activeCall.mute(true);
      setTimeout(() => {
        activeCall.mute(false);
        console.log("🎤 Mic Reset & Unmuted.");
      }, 500);
    } catch (err) {
      console.error("Mic Reset Failed:", err);
    }
  };

  const testSpeaker = () => {
    if (!device) return;
    device.audio.speakerDevices.test();
    console.log("Speaker test chime sent.");
  };

  const endCall = useCallback(() => {
    if (activeCall) {
      activeCall.disconnect();
      setActiveCall(null);
    }
    
    // Diagnostic Cleanup
    if (window._sampleInterval) clearInterval(window._sampleInterval);
    
    setInCall(false);
    setDialedNumber('');
    setCallDuration(0);
    setMicLevel(0);
    setRemoteMicLevel(0);
    setTransferredAgent(null);
    setIsTransferring(false);
    clearInterval(window._callTimer);

    // Automation: Start countdown if batch is active
    if (isBatchActive && currentLeadIndex >= 0) {
      const finalDur = callDuration + 's';
      setBatchLeads(prev => prev.map((l, i) => 
        i === currentLeadIndex ? { ...l, status: 'Completed', duration: finalDur } : l
      ));
      
      if (currentLeadIndex < batchLeads.length - 1) {
        setBatchCountdown(30);
        setIsWaitingNext(true);
      } else {
        setIsBatchActive(false);
        setIsWaitingNext(false);
        setCurrentLeadIndex(-1);
        setDialedNumber('');
      }
    }

    // Add to Call Logs
    const newLog = {
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      id: `#AX-${Math.floor(Math.random() * 9000) + 1000}`,
      user: (isBatchActive && currentLeadIndex >= 0 && batchLeads[currentLeadIndex]) ? batchLeads[currentLeadIndex].name : (dialedNumber || 'External Call'),
      out: Math.random() > 0.5 ? 'Converted' : 'Follow-up',
      sum: 'AI-generated summary: Interaction confirmed. Needs ' + (Math.random() > 0.5 ? 'pricing sheet.' : 'technical documentation.')
    };
    setCallLogs(prev => [newLog, ...prev]);

  }, [isBatchActive, currentLeadIndex, callDuration, batchLeads, dialedNumber, activeCall]);

  const startCall = useCallback(async () => {
    if (!dialedNumber) return;

    // Simulation Fallback if Twilio is not ready
    if (!device || (telephonyStatus !== 'READY' && telephonyStatus !== 'ERROR')) {
      console.warn("Starting call in SIMULATION MODE (Twilio not ready)");
      setInCall(true);
      setTransferredAgent(null);
      setIsTransferring(false);
      
      let dur = 0;
      const timer = setInterval(() => {
        dur++;
        setCallDuration(dur);
        setSentiment(prev => Math.min(100, Math.max(0, prev + (Math.random() * 6 - 3))));
      }, 1000);
      window._callTimer = timer;
      return;
    }

    // Start Real Twilio Call
    try {
      // Force AudioContext recovery on user gesture
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        console.log("Resuming AudioContext on user gesture...");
        audioContextRef.current.resume();
      }
      
      setTelephonyStatus('DIALING');
      
      // Normalize number (Add +91 if it's a 10-digit Indian number)
      let finalNumber = dialedNumber.replace(/\s+/g, '');
      if (finalNumber.length === 10 && !finalNumber.startsWith('+')) {
        finalNumber = '+91' + finalNumber;
      }

      const call = await device.connect({ 
        params: { To: finalNumber } 
      });

      call.on('accept', () => {
        setInCall(true);
        setTransferredAgent(null);
        setIsTransferring(false);
        
        // Use SDK native volume listener (Fixes one-way audio)
        call.on('volume', (inputVolume, outputVolume) => {
          setMicLevel(inputVolume * 100);
          setRemoteMicLevel(outputVolume * 100);
        });

        // FORCE UNMUTE ON START (Fixes "Silent Start" bug)
        setTimeout(() => {
          console.log("📡 Triggering Force Unmute...");
          call.mute(false);
        }, 1000);

        let dur = 0;
        const timer = setInterval(() => {
          dur++;
          setCallDuration(dur);
        }, 1000);
        window._callTimer = timer;

        // Diagnostic: Monitor packet flow
        let silentCounter = 0;
        call.on('sample', (sample) => {
          const packetsSent = sample.packetsSent || 0;
          
          if (Math.random() > 0.9) { 
             console.log(`[SDK] Packets Sent: ${packetsSent} | Received: ${sample.packetsReceived}`);
          }

          // AUTO-RESCUE LOGIC
          if (packetsSent === 0) {
            silentCounter++;
            if (silentCounter === 4) { // 4 samples (~4 seconds)
              console.warn("⚠️ [AUTO-RESCUE] No packets detected! Refreshing microphone...");
              resetMicrophone();
            }
          } else {
            silentCounter = 0; // Reset if any packet flows
          }
        });
      });

      call.on('disconnect', () => {
        setMicLevel(0);
        endCall();
      });
      call.on('error', (error) => {
        console.error('Call Error:', error);
        endCall();
      });

      setActiveCall(call);
    } catch (err) {
      console.error('Twilio Call Error:', err);
      setTelephonyStatus('ERROR');
    }
  }, [device, telephonyStatus, dialedNumber, endCall]);

  // Initialize Twilio Device
  useEffect(() => {
    const initTwilio = async () => {
      try {
        setTelephonyStatus('CONNECTING');
        
        // Volume Visualizer is now handled via Twilio Call 'volume' events 
        // to avoid one-way audio conflicts caused by multiple mic capture.
        console.log("Telephony initialization sequence started...");

        const res = await fetch('https://voice-call-scf4.onrender.com/api/twilio/token');
        const data = await res.json();
        
        if (!data.success) throw new Error('Token generation failed');

        const twilioDevice = new Device(data.token, {
          logLevel: 1,
          edge: ['singapore'], // Fixed regional edge for lower latency in Southeast Asia
          enableIceRestart: true,
          codecPreferences: ['pcmu', 'opus']
        });

        twilioDevice.on('registered', () => {
          console.log('Twilio Device Registered');
          setTelephonyStatus('READY');
        });

        twilioDevice.on('error', (error) => {
          console.error('Twilio Device Error:', error);
          
          // AUTO-REBOOT ON TRANSPORT ERROR 31009
          if (error.code === 31009 || error.message.includes('transport')) {
             console.warn("⚠️ Transport Error detected. Attempting automatic device reboot...");
             setTelephonyStatus('REBOOTING');
             setTimeout(() => {
                twilioDevice.unregister();
                initTwilio(); // Recursive reboot
             }, 3000);
          } else {
             setTelephonyStatus('ERROR');
          }
        });

        await twilioDevice.register();
        
        // EXPLICIT AUDIO BINDING FOR EDGE/CHROME
        const remoteAudio = document.getElementById('remoteAudio');
        if (remoteAudio) {
          // In SDK 2.x, we update options to ensure audio elements are recognized
          twilioDevice.updateOptions({
            audio: {
              output: true // Ensures output is prioritized
            }
          });
          console.log("Audio output pipeline initialized for:", remoteAudio.id);
        }

        setDevice(twilioDevice);
      } catch (err) {
        console.error('Twilio Init Error:', err);
        setTelephonyStatus('ERROR');
      }
    };

    initTwilio();

    return () => {
      if (device) device.destroy();
      if (window._micReqId) cancelAnimationFrame(window._micReqId);
    };
  }, []);

  const handleTransfer = () => {
    if (!inCall || isTransferring || transferredAgent) return;
    
    setIsTransferring(true);
    // Auto-select first 'Online' agent
    const availableAgent = humanAgents.find(a => a.stat === 'Online');
    
    setTimeout(() => {
      if (availableAgent) {
        setTransferredAgent(availableAgent.name);
      }
      setIsTransferring(false);
    }, 2000);
  };

  const handleDial = useCallback((num) => {
    if (dialedNumber.length < 15) {
      setDialedNumber(prev => prev + num);
    }
  }, [dialedNumber]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: 'binary' });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      
      const formattedLeads = data.map(row => {
        // More robust key matching
        const findVal = (keys) => {
          const foundKey = Object.keys(row).find(k => keys.some(key => k.toLowerCase().includes(key.toLowerCase())));
          return foundKey ? row[foundKey] : null;
        };

        const name = findVal(['name', 'customer', 'client', 'contact']) || 'Unknown';
        const mobile = findVal(['mobile', 'phone', 'number', 'tel', 'cell']) || '';

        return {
          name: name.toString(),
          mobile: mobile.toString().replace(/\D/g, ''), // Clean number
          status: 'Pending',
          duration: '--'
        };
      }).filter(l => l.mobile && l.mobile.length >= 5);

      setBatchLeads(formattedLeads);
    };
    reader.readAsBinaryString(file);
  };

  const startBatch = () => {
    if (batchLeads.length === 0) return;
    setIsBatchActive(true);
    setCurrentLeadIndex(0);
  };

  const stopBatch = () => {
    setIsBatchActive(false);
    setIsBatchPaused(false);
    setIsWaitingNext(false);
    setBatchCountdown(0);
    setCurrentLeadIndex(-1);
    setDialedNumber('');
  };

  // Trigger call when lead index changes
  useEffect(() => {
    if (isBatchActive && !isBatchPaused && currentLeadIndex >= 0 && currentLeadIndex < batchLeads.length) {
      const lead = batchLeads[currentLeadIndex];
      setDialedNumber(lead.mobile);
    }
  }, [currentLeadIndex, isBatchActive, isBatchPaused, batchLeads.length]);

  // Separate effect to trigger call once dialedNumber is sync'd
  useEffect(() => {
    if (isBatchActive && !isBatchPaused && currentLeadIndex >= 0 && dialedNumber && !inCall) {
      const lead = batchLeads[currentLeadIndex];
      if (dialedNumber === lead.mobile) {
        const dialTimeout = setTimeout(() => {
          startCall();
          setBatchLeads(prev => prev.map((l, i) => 
            i === currentLeadIndex ? { ...l, status: 'Calling' } : l
          ));
        }, 1500);
        return () => clearTimeout(dialTimeout);
      }
    }
  }, [dialedNumber, isBatchActive, isBatchPaused, currentLeadIndex, inCall, startCall]);

  // Countdown Logic
  useEffect(() => {
    let timer;
    if (batchCountdown > 0 && !isBatchPaused) {
      timer = setInterval(() => {
        setBatchCountdown(prev => prev - 1);
      }, 1000);
    } else if (batchCountdown === 0 && isBatchActive && isWaitingNext && !inCall && !isBatchPaused) {
      setIsWaitingNext(false);
      setCurrentLeadIndex(prev => prev + 1);
    }
    return () => clearInterval(timer);
  }, [batchCountdown, isBatchActive, isWaitingNext, inCall, isBatchPaused]);

  const deleteLastDigit = () => {
    setDialedNumber(prev => prev.slice(0, -1));
  };

  useEffect(() => {
    if (activeTab !== 'Live Calls') return;

    const handleKeyDown = (e) => {
      if (inCall) return; // Prevent dialing while in call
      
      const char = e.key;
      if (/^[0-9*#]$/.test(char)) {
        handleDial(char);
      } else if (char === 'Backspace') {
        deleteLastDigit();
      } else if (char === 'Enter' && dialedNumber) {
        startCall();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, dialedNumber, inCall, handleDial, startCall]);

  // Sentiment Fluctuation Logic
  useEffect(() => {
    let timer;
    if (inCall && !transferredAgent) {
      timer = setInterval(() => {
        setSentiment(prev => {
          const delta = Math.floor(Math.random() * 7) - 3; // -3 to +3
          const next = Math.min(100, Math.max(0, prev + delta));
          
          // Auto-transfer trigger if sentiment drops too low
          if (next < 30) {
            handleTransfer();
          }
          return next;
        });
      }, 3000);
    } else if (!inCall) {
      setSentiment(85); // Reset
    }
    return () => clearInterval(timer);
  }, [inCall, transferredAgent]);

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard },
    { name: 'Campaigns', icon: Target },
    { name: 'Live Calls', icon: PhoneCall },
    { name: 'Call Logs', icon: FileSearch },
    { name: 'AI Agent', icon: Bot },
    { name: 'Human Agents', icon: UserCheck },
    { name: 'Reports', icon: LineChart },
    { name: 'Contacts', icon: Contact2 },
    { name: 'Billing', icon: CreditCard },
    { name: 'Settings', icon: Settings },
    { name: 'Support', icon: LifeBuoy },
  ];

  return (
    <div className="app-shell dashboard-shell">
      {/* Floating Sidebar */}
      <aside className="floating-sidebar">
        <div className="logo-pill" style={{width: '40px', height: '40px', background: 'var(--accent-iris)', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', marginBottom: '10px'}}>
          <Zap size={20} fill="currentColor" />
        </div>
        {navItems.map((item) => (
          <div 
            key={item.name} 
            className={`sidebar-item ${activeTab === item.name ? 'active' : ''}`}
            onClick={() => setActiveTab(item.name)}
          >
            <item.icon size={20} />
            <span className="tooltip">{item.name}</span>
          </div>
        ))}
        <div className="sidebar-item" onClick={onBack} style={{marginTop: 'auto', color: 'var(--accent-rose)'}}>
          <Play size={20} style={{transform: 'rotate(180deg)'}} />
          <span className="tooltip">Logout</span>
        </div>
      </aside>

      {/* Silk Header */}
      <header className="prism-header">
        <div className="header-breadcrumbs">
          <span className="text-muted">Platform</span>
          <span style={{margin: '0 10px', opacity: 0.3}}>/</span>
          <span style={{fontWeight: 600}}>{activeTab}</span>
        </div>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button className="btn-primary" onClick={() => setActiveTab('Campaigns')}>
            <Target size={16} /> New Campaign
          </button>
          <div className="user-profile silk-card" style={{padding: '4px 12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '10px'}}>
            <div style={{width: '8px', height: '8px', background: '#10b981', borderRadius: '50%'}}></div>
            <span style={{fontSize: '0.8rem', fontWeight: 600}}>AD</span>
          </div>
        </div>
      </header>

      {/* Module Content */}
      <main>
        {activeTab === 'Dashboard' && (
          <div className="bento-grid">
            <div className="bento-card silk-card">
              <PhoneCall size={20} className="text-iris" style={{marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.8rem'}}>{stats.totalCalls}</h3>
              <p className="subtext">Total Calls Today</p>
            </div>
            <div className="bento-card silk-card">
              <Zap size={20} className="text-rose" style={{marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.8rem'}}>{stats.avgResolution}</h3>
              <p className="subtext">Avg Resolution Time</p>
            </div>
            <div className="bento-card silk-card">
              <Shield size={20} className="text-emerald" style={{marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.8rem'}}>{stats.csat}</h3>
              <p className="subtext">CSAT Score</p>
            </div>
            <div className="bento-card silk-card">
              <Users size={20} className="text-iris" style={{marginBottom: '16px'}} />
              <h3 style={{fontSize: '1.8rem'}}>{stats.activeAgents}</h3>
              <p className="subtext">Active AI Instances</p>
            </div>

            <div className="bento-card wide tall silk-card" style={{padding: '30px'}}>
              <div className="section-header" style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
                <h4>Live Conversion Trend</h4>
                <div className="badge-prism emerald">Optimizing</div>
              </div>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={[
                  { name: '08:00', val: 400 }, { name: '10:00', val: 700 }, { name: '12:00', val: 1200 }, 
                  { name: '14:00', val: 900 }, { name: '16:00', val: 1500 }, { name: '18:00', val: 1300 }
                ]}>
                  <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--accent-iris)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--accent-iris)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                  <XAxis dataKey="name" />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '10px' }}
                  />
                  <Area type="monotone" dataKey="val" stroke="var(--accent-iris)" fillOpacity={1} fill="url(#colorVal)" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bento-card tall silk-card" style={{padding: '30px'}}>
              <h4>System Health</h4>
              <div style={{marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {[
                  { label: "NLP Engine", val: "Optimal", color: "var(--accent-emerald)" },
                  { label: "TTS Engine", val: "READY", color: "var(--accent-emerald)" },
                  { label: "Microphone", val: telephonyStatus === 'MIC REQUIRED' ? "DENIED" : "READY", color: telephonyStatus === 'MIC REQUIRED' ? "var(--accent-rose)" : "var(--accent-emerald)" },
                  { label: "API Gateway", val: "Connected", color: "var(--accent-iris)" },
                ].map((s, i) => (
                  <div key={i} style={{paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)'}}>
                    <p className="subtext" style={{fontSize: '0.8rem', marginBottom: '4px'}}>{s.label}</p>
                    <p style={{fontWeight: 600, color: s.color}}>{s.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Live Calls' && (
          <div className="bento-grid">
            <div className="bento-card silk-card" style={{padding: '30px', minHeight: '400px', gridColumn: 'span 3'}}>
              <div className="section-header">
                <h3>Universal WebDialer</h3>
                <div style={{display: 'flex', gap: '10px'}}>
                  {batchCountdown > 0 && (
                    <div className="badge-prism iris pulse">
                      NEXT CALL IN: {batchCountdown}s
                    </div>
                  )}
                  <div className={`badge-prism ${inCall ? 'emerald pulse' : (telephonyStatus === 'READY' ? 'emerald' : 'rose pulse')}`}>
                    {inCall ? (isTransferring ? 'TRANSFERRING...' : transferredAgent ? `HUMAN: ${transferredAgent}` : 'AI AGENT LIVE') : (telephonyStatus === 'READY' ? 'SYSTEM READY' : telephonyStatus)}
                  </div>
                  {!inCall && telephonyStatus === 'READY' && (
                    <button onClick={testSpeaker} className="badge-prism iris" style={{cursor: 'pointer', border: 'none', background: 'var(--accent-iris)', color: '#fff'}}>
                      🔊 TEST SPEAKERS
                    </button>
                  )}
                  {inCall && <div className="badge-prism iris">{ '00:' + (callDuration < 10 ? '0' + callDuration : callDuration) }</div>}
                  {isBatchPaused && <div className="badge-prism rose pulse">PAUSED</div>}
                </div>
              </div>
              
              <div className="dialer-layout" style={{display: 'flex', gap: '40px', marginTop: '20px'}}>
                <div className="dialpad-container" style={{flex: 1}}>
                  <div style={{marginBottom: '15px', display: 'flex', gap: '8px'}}>
                    <button onClick={() => setDialedNumber('9444667411')} className="badge-prism iris" style={{cursor: 'pointer', border: 'none', background: 'var(--bg-tertiary)'}}>TEST: 94446...</button>
                    <button onClick={() => setDialedNumber('9894428677')} className="badge-prism iris" style={{cursor: 'pointer', border: 'none', background: 'var(--bg-tertiary)'}}>TEST: 98944...</button>
                  </div>
                  <div className="dial-input" style={{fontSize: '1.5rem', letterSpacing: '4px', marginBottom: '20px', padding: '15px', background: 'var(--bg-tertiary)', borderRadius: '12px', textAlign: 'center'}}>
                    {dialedNumber || 'ENTER NUMBER'}
                  </div>
                  <div className="dialpad-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px'}}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map(n => (
                      <button key={n} onClick={() => handleDial(n.toString())} className="silk-card" style={{padding: '15px', fontSize: '1.2rem'}}>{n}</button>
                    ))}
                    <button onClick={startCall} disabled={inCall} className="btn-primary" style={{gridColumn: 'span 1', justifyContent: 'center'}}>
                      <PhoneCall size={18} /> START
                    </button>
                    <button onClick={handleTransfer} disabled={!inCall || isTransferring || transferredAgent} className="btn-secondary" style={{gridColumn: 'span 1', justifyContent: 'center', borderColor: 'var(--accent-iris)', color: 'var(--accent-iris)'}}>
                      <Users size={18} /> TRANSFER
                    </button>
                    <button onClick={endCall} disabled={!inCall} className="btn-secondary" style={{gridColumn: 'span 1', background: 'var(--accent-rose)', color: '#fff', borderColor: 'transparent'}}>
                      <Play size={18} style={{transform: 'rotate(180deg)'}} /> END
                    </button>
                    {inCall && (
                      <button onClick={resetMicrophone} className="btn-secondary" style={{gridColumn: 'span 3', marginTop: '10px', background: 'var(--bg-tertiary)', borderColor: 'var(--accent-iris)'}}>
                        🎙️ RESET MICROPHONE (IF THEY CAN'T HEAR YOU)
                      </button>
                    )}
                  </div>
                </div>

                <div className="transcript-container silk-card" style={{flex: 1.5, padding: '20px', background: 'var(--bg-deep)', maxHeight: '360px', overflowY: 'auto'}}>
                  <p className="text-muted" style={{fontSize: '0.75rem', marginBottom: '15px'}}>LIVE TRANSCRIPT ENGINE v4.0</p>
                  {!inCall ? (
                    <div style={{height: '80%', display: 'flex', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center', opacity: 0.3}}>
                      <Bot size={48} />
                      <p style={{width: '100%', textAlign: 'center', marginTop: '10px'}}>Awaiting Active Audio Stream...</p>
                    </div>
                  ) : (
                    <div className="transcript-flow">
                       <p style={{color: 'var(--accent-iris)', marginBottom: '10px'}}><strong>AI:</strong> Hello! This is Antigraviity AI. How can I help you today?</p>
                       {callDuration > 2 && <p style={{color: 'var(--text-primary)', marginBottom: '10px'}}><strong>Customer:</strong> Yes, I'm interested in your enterprise pricing.</p>}
                       {isTransferring && <p style={{color: 'var(--accent-iris)', marginBottom: '10px', fontStyle: 'italic'}}>*** Optimizing connection. Searching for available human specialist... ***</p>}
                       {transferredAgent && <p style={{color: 'var(--accent-emerald)', marginBottom: '10px', fontWeight: 600}}>*** Handover successful. Connected to {transferredAgent} ***</p>}
                       {transferredAgent && <p style={{color: 'var(--accent-iris)', marginBottom: '10px'}}><strong>{transferredAgent}:</strong> Hi! I'm {transferredAgent}. I've reviewed your conversation with the AI. Let's talk about those bulk rates.</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="bento-card silk-card" style={{padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div>
                <h4>Voice Visualizer</h4>
                <div style={{height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '20px'}}>
                  {/* Local Mic (Left) */}
                  <div style={{display: 'flex', gap: '3px', alignItems: 'center'}}>
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: (4 + (micLevel * (0.5 + Math.random()))) }}
                        transition={{ duration: 0.1 }}
                        style={{width: '4px', background: 'var(--accent-iris)', borderRadius: '2px'}}
                      />
                    ))}
                    <span style={{fontSize: '0.6rem', opacity: 0.5, marginLeft: '5px'}}>YOU</span>
                  </div>

                  <div style={{width: '2px', height: '40px', background: 'var(--border-subtle)'}}></div>

                  {/* Remote Volume (Right) */}
                  <div style={{display: 'flex', gap: '3px', alignItems: 'center'}}>
                    <span style={{fontSize: '0.6rem', opacity: 0.5, marginRight: '5px'}}>THEM</span>
                    {[...Array(6)].map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: (4 + (remoteMicLevel * (0.5 + Math.random()))) }}
                        transition={{ duration: 0.1 }}
                        style={{width: '4px', background: 'var(--accent-emerald)', borderRadius: '2px'}}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="silk-card" style={{padding: '20px', background: 'var(--bg-tertiary)', borderRadius: '16px'}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                   <h4 style={{margin: 0, fontSize: '0.9rem'}}>Real-Time Mood Meter</h4>
                   <Activity className="text-iris" size={20} />
                </div>
                
                <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                   <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '5px'}}>
                         <span style={{color: 'var(--accent-emerald)', fontWeight: 600}}>Positive Impact</span>
                         <span>{sentiment}%</span>
                      </div>
                      <div style={{height: '6px', background: 'var(--bg-deep)', borderRadius: '3px', overflow: 'hidden'}}>
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${sentiment}%` }}
                           style={{height: '100%', background: 'var(--accent-emerald)'}}
                         />
                      </div>
                   </div>
                   <div>
                      <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '5px'}}>
                         <span style={{color: 'var(--accent-rose)', fontWeight: 600}}>Frustration Level</span>
                         <span>{100 - sentiment}%</span>
                      </div>
                      <div style={{height: '6px', background: 'var(--bg-deep)', borderRadius: '3px', overflow: 'hidden'}}>
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: `${100 - sentiment}%` }}
                           style={{height: '100%', background: 'var(--accent-rose)'}}
                         />
                      </div>
                   </div>
                </div>

                <button 
                  onClick={handleTransfer}
                  disabled={!inCall || isTransferring || transferredAgent}
                  className={`btn-primary ${sentiment < 40 ? 'pulse' : ''}`}
                  style={{
                    width: '100%', 
                    marginTop: '20px', 
                    background: sentiment < 40 ? 'var(--accent-rose)' : 'var(--accent-iris)',
                    fontSize: '0.8rem',
                    padding: '10px'
                  }}
                >
                   <LifeBuoy size={16} /> {sentiment < 40 ? 'RESCUE CALL NOW' : 'MANUAL INTERVENE'}
                </button>
              </div>

              <div style={{marginTop: 'auto'}}>
                <h4>Batch Management</h4>
                <p className="subtext" style={{fontSize: '0.8rem', marginBottom: '15px'}}>Upload customer list to start automated dialing.</p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                  <label className="btn-secondary" style={{display: 'flex', justifyContent: 'center', gap: '8px', cursor: 'pointer'}}>
                    <FileSearch size={16} /> {batchLeads.length > 0 ? `${batchLeads.length} Leads Loaded` : 'Upload XLS/CSV'}
                    <input type="file" hidden accept=".csv, .xls, .xlsx" onChange={handleFileUpload} />
                  </label>
                  
                  {!isBatchActive && (
                    <button 
                      className="btn-primary" 
                      onClick={startBatch} 
                      disabled={batchLeads.length === 0}
                      style={{justifyContent: 'center'}}
                    >
                      <Play size={16} /> Start Batch Mode
                    </button>
                  )}

                  {isBatchActive && (
                    <div style={{display: 'flex', gap: '10px'}}>
                      <button 
                        className="btn-secondary" 
                        onClick={() => setIsBatchPaused(!isBatchPaused)}
                        style={{flex: 1, justifyContent: 'center', background: isBatchPaused ? 'var(--accent-iris)' : 'var(--bg-tertiary)', color: isBatchPaused ? '#fff' : 'var(--text-primary)'}}
                      >
                        {isBatchPaused ? <Play size={16} /> : <Pause size={16} />} {isBatchPaused ? 'Resume' : 'Pause'}
                      </button>
                      <button 
                        className="btn-secondary" 
                        onClick={stopBatch}
                        style={{flex: 1, justifyContent: 'center', borderColor: 'var(--accent-rose)', color: 'var(--accent-rose)'}}
                      >
                        <Square size={16} /> Stop
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {batchLeads.length > 0 && (
              <div className="bento-card silk-card" style={{padding: '30px', gridColumn: 'span 4'}}>
                <div className="section-header">
                  <h4>Automated Leads Tracker</h4>
                  <div className="badge-prism iris">{isBatchActive ? `Processing ${currentLeadIndex + 1}/${batchLeads.length}` : 'Pending'}</div>
                </div>
                <table className="data-table" style={{marginTop: '20px'}}>
                  <thead>
                    <tr>
                      <th>Customer Name</th>
                      <th>Mobile Number</th>
                      <th>Status</th>
                      <th>Call Duration</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {batchLeads.map((lead, i) => (
                      <tr key={i} style={{opacity: i < currentLeadIndex ? 0.5 : 1, background: i === currentLeadIndex ? 'var(--bg-tertiary)' : 'transparent'}}>
                        <td style={{fontWeight: 600}}>{lead.name}</td>
                        <td>{lead.mobile}</td>
                        <td>
                          <div className={`badge-prism ${
                            i === currentLeadIndex ? 'iris pulse' : 
                            i < currentLeadIndex ? 'emerald' : 'muted'
                          }`}>
                            {i === currentLeadIndex ? 'CALLING' : i < currentLeadIndex ? 'COMPLETED' : 'PENDING'}
                          </div>
                        </td>
                        <td>{i === currentLeadIndex ? (callDuration + 's') : lead.duration}</td>
                        <td><button className="btn-secondary" style={{padding: '4px 10px', fontSize: '0.7rem'}}>Details</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {activeTab === 'Call Logs' && (
          <div className="silk-card" style={{padding: '30px'}}>
            <div className="section-header">
              <h3>Interaction Archive</h3>
              <button className="btn-secondary">Export CSV</button>
            </div>
            <table className="data-table" style={{marginTop: '20px'}}>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Outcome</th>
                  <th>AI Summary</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {callLogs.map((row, i) => (
                  <tr key={i}>
                    <td>{row.time}</td>
                    <td>{row.id}</td>
                    <td style={{fontWeight: 600}}>{row.user}</td>
                    <td><span className={`badge-prism ${row.out === 'Converted' ? 'emerald' : row.out === 'Follow-up' ? 'iris' : 'rose'}`}>{row.out}</span></td>
                    <td className="subtext" style={{fontSize: '0.8rem'}}>{row.sum}</td>
                    <td><button className="btn-secondary" style={{padding: '4px 10px', fontSize: '0.75rem'}}>View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Contacts' && (
          <div className="silk-card" style={{padding: '30px'}}>
            <div className="section-header">
              <h3>CRM Pipeline</h3>
              <button className="btn-primary">Add Contact</button>
            </div>
            <table className="data-table" style={{marginTop: '20px'}}>
              <thead>
                <tr>
                  <th>Contact Name</th>
                  <th>Last Call</th>
                  <th>Sentiment</th>
                  <th>Pipeline Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Albert Flores', last: '2h ago', sent: 'Positive', stat: 'Hot Lead' },
                  { name: 'Bessie Cooper', last: '1d ago', sent: 'Neutral', stat: 'Nurture' },
                  { name: 'Arlene McCoy', last: '3d ago', sent: 'Negative', stat: 'Lost' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td style={{fontWeight: 600}}>{row.name}</td>
                    <td>{row.last}</td>
                    <td><span style={{color: row.sent === 'Positive' ? 'var(--accent-emerald)' : 'var(--text-muted)'}}>{row.sent}</span></td>
                    <td><div className="badge-prism iris">{row.stat}</div></td>
                    <td><Play size={14} className="text-iris" style={{cursor: 'pointer'}} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Campaigns' && (
          <div className="silk-card" style={{padding: '40px', position: 'relative'}}>
            <div className="section-header">
              <h3>Campaign Management</h3>
              <button className="btn-primary" onClick={() => setIsCreatingCampaign(true)}>+ Launch New</button>
            </div>
            <div className="bento-grid" style={{marginTop: '20px'}}>
              {[
                { name: 'Q2 Reactivation', reach: '1,200', conv: '12%', status: 'Active' },
                { name: 'Beta Program', reach: '450', conv: '45%', status: 'Active' },
              ].map((c, i) => (
                <div key={i} className="bento-card silk-card">
                  <div className="badge-prism emerald" style={{marginBottom: '10px'}}>{c.status}</div>
                  <h4>{c.name}</h4>
                  <div style={{marginTop: '20px'}}>
                    <p className="subtext">Reach: {c.reach}</p>
                    <p className="subtext">Conv: {c.conv}</p>
                  </div>
                </div>
              ))}
            </div>

            {isCreatingCampaign && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-shell-glass)', backdropFilter: 'blur(10px)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, borderRadius: '24px'}}
              >
                <div className="silk-card" style={{padding: '40px', textAlign: 'center'}}>
                  <Target size={48} className="text-iris" style={{marginBottom: '20px'}} />
                  <h3>Wizard Initializing...</h3>
                  <p className="subtext" style={{marginBottom: '20px'}}>Connecting to NLP Training Engine</p>
                  <button className="btn-secondary" onClick={() => setIsCreatingCampaign(false)}>Cancel</button>
                </div>
              </motion.div>
            )}
          </div>
        )}

        {activeTab === 'AI Agent' && (
          <div className="bento-grid">
            <div className="bento-card wide silk-card" style={{padding: '30px'}}>
              <h3>Voice Selection Studio</h3>
              <div style={{display: 'flex', gap: '20px', marginTop: '20px'}}>
                {['The Friendly Advisor', 'The Direct Closer', 'The Technical Expert'].map((voice, i) => (
                  <div 
                    key={i} 
                    className="silk-card" 
                    style={{
                      padding: '20px', 
                      flex: 1, 
                      border: i === 0 ? '2px solid var(--accent-iris)' : '1px solid var(--border-subtle)', 
                      cursor: 'pointer',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center'}}>
                      <div className="badge-prism iris" style={{fontSize: '0.65rem'}}>VOICE ID: {100 + i}</div>
                      <div style={{display: 'flex', gap: '8px'}}>
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setPlayingVoice(playingVoice === i ? null : i);
                          }}
                          style={{
                            width: '28px', 
                            height: '28px', 
                            borderRadius: '50%', 
                            background: playingVoice === i ? 'var(--accent-rose)' : 'var(--accent-iris)', 
                            border: 'none', 
                            cursor: 'pointer', 
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          {playingVoice === i ? <StopCircle size={14} /> : <Volume2 size={14} />}
                        </button>
                        {i === 0 && <CheckCircle2 size={16} className="text-emerald" />}
                      </div>
                    </div>
                    <strong style={{fontSize: '0.85rem', display: 'block', marginBottom: '4px'}}>{voice}</strong>
                    <p className="subtext" style={{fontSize: '0.7rem', lineHeight: '1.4'}}>
                      {i === 0 ? 'Optimized for empathy, relationship building, and customer retention.' : 
                       i === 1 ? 'Tailored for high-stakes B2B sales cycles and closing enterprise deals.' : 
                       'Engineered for deep technical support and product onboarding workflows.'}
                    </p>
                    
                    {playingVoice === i && (
                      <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3px', background: 'rgba(99, 102, 241, 0.05)'}}>
                         {[...Array(15)].map((_, j) => (
                           <motion.div 
                             key={j}
                             animate={{ height: [4, 15, 8, 20, 6] }}
                             transition={{ repeat: Infinity, duration: 0.6 + j * 0.1 }}
                             style={{width: '3px', background: 'var(--accent-iris)', borderRadius: '2px'}}
                           />
                         ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div style={{marginTop: '30px'}}>
                <h4>Tone Calibration</h4>
                <div style={{marginTop: '20px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '10px'}}>
                    <span>Emotional Depth</span>
                    <span className="text-iris">85%</span>
                  </div>
                  <div style={{height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px'}}>
                    <div style={{width: '85%', height: '100%', background: 'var(--accent-iris)', borderRadius: '3px'}}></div>
                  </div>
                </div>
                <div style={{marginTop: '20px'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '10px'}}>
                    <span>Professional Accuracy</span>
                    <span className="text-iris">92%</span>
                  </div>
                  <div style={{height: '6px', background: 'var(--bg-tertiary)', borderRadius: '3px'}}>
                    <div style={{width: '92%', height: '100%', background: 'var(--accent-iris)', borderRadius: '3px'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bento-card tall silk-card" style={{padding: '30px'}}>
              <h4>Smart Transfer Triggers</h4>
              <p className="subtext" style={{fontSize: '0.85rem', marginBottom: '20px'}}>Automatically route to humans when:</p>
              <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {[
                  { label: "Sentiment falls below 30%", active: true },
                  { label: "Request for 'Specialist'", active: true },
                  { label: "Abusive language detected", active: true },
                  { label: "Billing dispute keywords", active: false },
                ].map((trigger, i) => (
                  <div key={i} className="silk-card" style={{padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <span style={{fontSize: '0.85rem'}}>{trigger.label}</span>
                    <div style={{width: '32px', height: '18px', background: trigger.active ? 'var(--accent-iris)' : 'var(--bg-tertiary)', borderRadius: '10px', position: 'relative'}}>
                      <div style={{width: '14px', height: '14px', background: '#fff', borderRadius: '50%', position: 'absolute', top: '2px', left: trigger.active ? '16px' : '2px'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Human Agents' && (
          <div className="silk-card" style={{padding: '30px'}}>
            <div className="section-header">
              <h3>Human Specialist Registry</h3>
              <button className="btn-primary">+ Add Specialist</button>
            </div>
            <table className="data-table" style={{marginTop: '20px'}}>
              <thead>
                <tr>
                  <th>Agent Name</th>
                  <th>Primary Skill</th>
                  <th>Success Rate</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {humanAgents.map((agent, i) => (
                  <tr key={i}>
                    <td style={{fontWeight: 600}}>{agent.name}</td>
                    <td><div className="badge-prism iris">{agent.skill}</div></td>
                    <td>{agent.rate}</td>
                    <td><div className={`badge-prism ${agent.stat === 'Online' ? 'emerald' : agent.stat === 'In-Call' ? 'rose' : 'muted'}`}>{agent.stat}</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Reports' && (
          <div className="bento-grid">
            <div className="bento-card wide tall silk-card" style={{padding: '30px'}}>
              <h4>Revenue Impact vs AI Cost</h4>
              <ResponsiveContainer width="100%" height={340} style={{marginTop: '20px'}}>
                <BarChart data={[
                  { month: 'Jan', revenue: 4500, cost: 800 },
                  { month: 'Feb', revenue: 5200, cost: 950 },
                  { month: 'Mar', revenue: 6800, cost: 1100 },
                  { month: 'Apr', revenue: 8400, cost: 1250 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border-subtle)" />
                  <XAxis dataKey="month" />
                  <YAxis hide />
                  <Tooltip contentStyle={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-subtle)', borderRadius: '10px' }} />
                  <Bar dataKey="revenue" fill="var(--accent-iris)" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="cost" fill="var(--accent-rose)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div style={{display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px'}}>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem'}}><div style={{width: '12px', height: '12px', background: 'var(--accent-iris)', borderRadius: '4px'}}></div> Revenue</div>
                <div style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem'}}><div style={{width: '12px', height: '12px', background: 'var(--accent-rose)', borderRadius: '4px'}}></div> Operational Cost</div>
              </div>
            </div>

            <div className="bento-card silk-card" style={{padding: '30px'}}>
              <h4>Objection Tracking</h4>
              <div style={{marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px'}}>
                {[
                  { label: "Pricing too high", val: "42%" },
                  { label: "Technical complexity", val: "28%" },
                  { label: "Competitor lock-in", val: "15%" },
                  { label: "Other", val: "15%" },
                ].map((obj, i) => (
                  <div key={i}>
                    <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px'}}>
                      <span>{obj.label}</span>
                      <span>{obj.val}</span>
                    </div>
                    <div style={{height: '4px', background: 'var(--bg-tertiary)', borderRadius: '2px'}}>
                      <div style={{width: obj.val, height: '100%', background: 'var(--accent-iris)'}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Billing' && (
          <div className="bento-grid">
            <div className="bento-card silk-card" style={{padding: '30px'}}>
              <h4>Voice Credits</h4>
              <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center', position: 'relative'}}>
                <PieChart width={160} height={160}>
                  <Pie
                    data={[
                      { name: 'Used', value: 720, fill: 'var(--accent-iris)' },
                      { name: 'Remaining', value: 280, fill: 'var(--bg-tertiary)' }
                    ]}
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    stroke="none"
                  />
                </PieChart>
                <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center'}}>
                  <h3 style={{margin: 0}}>72%</h3>
                  <p className="subtext" style={{fontSize: '0.65rem'}}>Consumed</p>
                </div>
              </div>
              <p className="subtext" style={{textAlign: 'center', marginTop: '20px'}}>720 / 1,000 Minutes Used</p>
              <button className="btn-primary" style={{width: '100%', marginTop: '30px'}}>Add Credits</button>
            </div>

            <div className="bento-card wide silk-card" style={{padding: '30px'}}>
              <div className="section-header">
                <h3>Financial History</h3>
                <div className="badge-prism emerald">Wallet: $1,240.00</div>
              </div>
              <table className="data-table" style={{marginTop: '20px'}}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Ref ID</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: 'Apr 18, 2026', id: '#INV-9901', amt: '$500.00', type: 'Deposit', stat: 'Completed' },
                    { date: 'Apr 15, 2026', id: '#INV-9852', amt: '$124.20', type: 'Usage Charge', stat: 'Settled' },
                    { date: 'Apr 10, 2026', id: '#INV-9800', amt: '$1,000.00', type: 'Deposit', stat: 'Completed' },
                  ].map((inv, i) => (
                    <tr key={i}>
                      <td>{inv.date}</td>
                      <td>{inv.id}</td>
                      <td>{inv.amt}</td>
                      <td>{inv.type}</td>
                      <td><div className="badge-prism emerald">{inv.stat}</div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'Settings' && (
          <div className="silk-card" style={{padding: '40px', maxWidth: '800px'}}>
            <h3>Global Infrastructure</h3>
            <div style={{marginTop: '30px'}}>
              <h4 style={{marginBottom: '20px'}}>API & Integration</h4>
              <div className="silk-card" style={{padding: '20px', background: 'var(--bg-tertiary)'}}>
                <label className="subtext" style={{fontSize: '0.75rem', display: 'block', marginBottom: '10px'}}>PRODUCTION API KEY</label>
                <div style={{display: 'flex', gap: '10px'}}>
                  <input 
                    type="password" 
                    readOnly 
                    value="your_antigraviity_key_here" 
                    style={{flex: 1, padding: '10px', background: 'transparent', border: '1px solid var(--border-subtle)', borderRadius: '8px', color: 'var(--text-primary)'}}
                  />
                  <button className="btn-secondary" style={{padding: '0 15px'}}>Copy</button>
                </div>
              </div>
            </div>

            <div style={{marginTop: '40px'}}>
              <h4 style={{marginBottom: '20px'}}>Regional Preferences</h4>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px'}}>
                <div>
                  <label className="subtext" style={{display: 'block', marginBottom: '8px'}}>Timezone</label>
                  <select style={{width: '100%', padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '10px', color: 'var(--text-primary)'}}>
                    <option>(GMT+05:30) Mumbai, New Delhi</option>
                    <option>(GMT-08:00) Pacific Time</option>
                  </select>
                </div>
                <div>
                  <label className="subtext" style={{display: 'block', marginBottom: '8px'}}>Default Language</label>
                  <select style={{width: '100%', padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '10px', color: 'var(--text-primary)'}}>
                    <option>English (US)</option>
                    <option>Tamil (Selected)</option>
                    <option>Hindi</option>
                  </select>
                </div>
              </div>
            </div>
            
            <button className="btn-primary" style={{marginTop: '40px'}}>Save All Changes</button>
          </div>
        )}

        {activeTab === 'Support' && (
          <div className="bento-grid" style={{position: 'relative'}}>
            <div className="bento-card wide silk-card" style={{padding: '30px'}}>
              <div className="section-header">
                <h3>Technical Support Hub</h3>
                <button className="btn-primary" onClick={() => setIsRaisingTicket(true)}>+ Raise Ticket</button>
              </div>
              
              <div style={{marginTop: '30px'}}>
                <h4>Active & Past Tickets</h4>
                <table className="data-table" style={{marginTop: '20px'}}>
                  <thead>
                    <tr>
                      <th>Ticket ID</th>
                      <th>Subject</th>
                      <th>Priority</th>
                      <th>Last Update</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tickets.map((t, i) => (
                      <tr key={i}>
                        <td style={{fontWeight: 600, color: 'var(--accent-iris)'}}>{t.id}</td>
                        <td>{t.subject}</td>
                        <td><div className={`badge-prism ${t.priority === 'High' ? 'rose' : 'iris'}`}>{t.priority}</div></td>
                        <td>{t.date}</td>
                        <td><div className={`badge-prism ${t.status === 'Resolved' ? 'emerald' : t.status === 'In-Progress' ? 'iris' : 'muted'}`}>{t.status}</div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bento-card silk-card" style={{padding: '30px'}}>
              <h4>System Health</h4>
              <div style={{marginTop: '30px', textAlign: 'center'}}>
                <div style={{width: '80px', height: '80px', borderRadius: '50%', background: 'var(--accent-emerald)', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', color: '#fff'}}>
                  <CheckCircle2 size={40} />
                </div>
                <p style={{marginTop: '20px', fontWeight: 600}}>All Systems Operational</p>
                <p className="subtext" style={{fontSize: '0.8rem'}}>Last checked: 1 minute ago</p>
              </div>
            </div>

            {isRaisingTicket && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--bg-shell-glass)', backdropFilter: 'blur(15px)', zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '24px'}}
              >
                <div className="silk-card" style={{padding: '40px', width: '100%', maxWidth: '500px'}}>
                  <h3>Raise New Support Ticket</h3>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    const ticket = {
                      id: `TKT-${Math.floor(Math.random() * 9000) + 1000}`,
                      subject: newTicket.subject,
                      status: 'Open',
                      priority: 'Normal',
                      date: 'Just Now'
                    };
                    setTickets([ticket, ...tickets]);
                    setIsRaisingTicket(false);
                    setNewTicket({ subject: '', category: 'General', description: '' });
                  }}>
                    <div style={{marginTop: '20px'}}>
                      <label style={{display: 'block', fontSize: '0.8rem', marginBottom: '8px'}}>Subject</label>
                      <input 
                        required
                        className="silk-card" 
                        style={{width: '100%', padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '10px'}}
                        value={newTicket.subject}
                        onChange={(e) => setNewTicket({...newTicket, subject: e.target.value})}
                      />
                    </div>
                    <div style={{marginTop: '20px'}}>
                      <label style={{display: 'block', fontSize: '0.8rem', marginBottom: '8px'}}>Category</label>
                      <select 
                        className="silk-card" 
                        style={{width: '100%', padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '10px'}}
                        value={newTicket.category}
                        onChange={(e) => setNewTicket({...newTicket, category: e.target.value})}
                      >
                        <option>General Inquiry</option>
                        <option>Technical Issue</option>
                        <option>Billing Question</option>
                        <option>AI Voice Quality</option>
                      </select>
                    </div>
                    <div style={{marginTop: '20px'}}>
                      <label style={{display: 'block', fontSize: '0.8rem', marginBottom: '8px'}}>Description</label>
                      <textarea 
                        className="silk-card" 
                        style={{width: '100%', height: '100px', padding: '12px', background: 'var(--bg-tertiary)', border: '1px solid var(--border-subtle)', borderRadius: '10px'}}
                        value={newTicket.description}
                        onChange={(e) => setNewTicket({...newTicket, description: e.target.value})}
                      />
                    </div>
                    <div style={{marginTop: '30px', display: 'flex', gap: '15px'}}>
                      <button type="submit" className="btn-primary" style={{flex: 1}}>Submit Ticket</button>
                      <button type="button" className="btn-secondary" onClick={() => setIsRaisingTicket(false)}>Cancel</button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </div>
        )}
      </main>
      <audio id="remoteAudio" autoPlay hidden />
    </div>
  );
};



export default function App() {
  const [view, setView] = useState('landing');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        {view === 'landing' && (
          <motion.div 
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage 
              onGoToDashboard={() => setView('dashboard')} 
              onGoToLogin={() => setView('login')}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </motion.div>
        )}
        
        {view === 'login' && (
          <motion.div 
            key="login"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.4 }}
          >
            <LoginPage 
              onLoginSuccess={() => setView('dashboard')}
              onBack={() => setView('landing')}
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </motion.div>
        )}

        {view === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Dashboard 
              onBack={() => setView('landing')} 
              theme={theme}
              toggleTheme={toggleTheme}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
