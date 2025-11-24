import React, { useState } from 'react';
import { ChevronRight, CheckCircle, AlertCircle, FileText, DollarSign, TrendingUp, MessageSquare, Clock, Zap, BarChart3 } from 'lucide-react';

export default function ClaimsAIPrototype() {
  const [stage, setStage] = useState('dashboard');
  const [selectedClaim, setSelectedClaim] = useState(null);

  const mockClaims = [
    {
      id: 'CLM-2025-04521',
      claimant: 'Medha',
      incident: 'Rear-end collision on I-95',
      fnolDate: '2025-11-24 14:32',
      status: 'Investigation',
      complexity: 4,
      fraudScore: 12,
      aiRecommendations: 3,
      cycleTimeEstimate: '1.8 hrs',
      agentInProgress: true,
    },
    {
      id: 'CLM-2025-04520',
      claimant: 'Deva',
      incident: 'Side-swipe accident',
      fnolDate: '2025-11-24 11:15',
      status: 'Ready for Settlement',
      complexity: 2,
      fraudScore: 8,
      aiRecommendations: 4,
      cycleTimeEstimate: '1.2 hrs',
      agentInProgress: false,
    },
    {
      id: 'CLM-2025-04519',
      claimant: 'Emma',
      incident: 'Parking lot hit and run',
      fnolDate: '2025-11-24 09:00',
      status: 'Completed',
      complexity: 1,
      fraudScore: 5,
      aiRecommendations: 5,
      cycleTimeEstimate: '0.9 hrs',
      agentInProgress: false,
    },
  ];

  const getStatusColor = (status) => {
    if (status === 'Investigation') return { bg: '#1e3a8a', text: '#bfdbfe' };
    if (status === 'Ready for Settlement') return { bg: '#78350f', text: '#fef3c7' };
    return { bg: '#15803d', text: '#86efac' };
  };

  // Dashboard View
  const DashboardView = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'rgba(30, 41, 59, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(71, 85, 105, 0.3)', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap style={{ width: '24px', height: '24px', color: 'white' }} />
            </div>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: '0' }}>ClaimsAI Autopilot</h1>
              <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' }}>Investigation & Settlement Suite</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: 'bold', margin: '0' }}>Welcome, Medha</p>
              <p style={{ fontSize: '12px', color: '#64748b', margin: '0' }}>Claims Adjuster</p>
            </div>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 100%)', borderRadius: '50%' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Active Queue', value: '12', icon: BarChart3, color: '#60a5fa' },
            { label: 'Avg Cycle Time', value: '1.8h', subtext: '↓ 60% vs baseline', icon: TrendingUp, color: '#4ade80' },
            { label: 'Agent Recommendations', value: '94%', subtext: 'Acceptance rate', icon: CheckCircle, color: '#06b6d4' },
            { label: 'Fraud Detections', value: '3', subtext: 'This week', icon: AlertCircle, color: '#fb923c' },
          ].map((stat, i) => (
            <div key={i} style={{ background: 'rgba(55, 65, 81, 0.4)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', padding: '16px', cursor: 'pointer', transition: 'all 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 8px 0' }}>{stat.label}</p>
                  <p style={{ fontSize: '32px', fontWeight: 'bold', color: 'white', margin: '0' }}>{stat.value}</p>
                  {stat.subtext && <p style={{ fontSize: '12px', color: stat.color, margin: '4px 0 0 0' }}>{stat.subtext}</p>}
                </div>
                <stat.icon style={{ width: '32px', height: '32px', color: stat.color, opacity: 0.6 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Claims Queue */}
        <div style={{ background: 'rgba(55, 65, 81, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', overflow: 'hidden' }}>
          <div style={{ background: 'rgba(30, 41, 59, 0.6)', borderBottom: '1px solid rgba(71, 85, 105, 0.3)', padding: '16px 24px' }}>
            <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', display: 'flex', gap: '8px', alignItems: 'center', margin: '0' }}>
              <Clock style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
              Your Claim Queue (AI-Prioritized)
            </h2>
          </div>
          <div>
            {mockClaims.map((claim) => {
              const statusColor = getStatusColor(claim.status);
              return (
                <div
                  key={claim.id}
                  onClick={() => {
                    setSelectedClaim(claim);
                    setStage('investigation');
                  }}
                  style={{ padding: '16px 24px', borderBottom: '1px solid rgba(71, 85, 105, 0.2)', cursor: 'pointer', transition: 'all 0.3s', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(71, 85, 105, 0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '14px', fontWeight: 'bold', color: '#60a5fa' }}>{claim.id}</span>
                      <span style={{ background: statusColor.bg, color: statusColor.text, padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500' }}>
                        {claim.status}
                      </span>
                      {claim.agentInProgress && (
                        <span style={{ background: '#164e63', color: '#06b6d4', padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '500', display: 'flex', gap: '4px', alignItems: 'center' }}>
                          <Zap style={{ width: '12px', height: '12px' }} /> Agent Active
                        </span>
                      )}
                    </div>
                    <p style={{ color: '#cbd5e1', fontWeight: '500', margin: '0 0 4px 0' }}>{claim.claimant}</p>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 12px 0' }}>{claim.incident}</p>
                    <div style={{ display: 'flex', gap: '24px', fontSize: '12px', color: '#94a3b8' }}>
                      <span>FNOL: {claim.fnolDate}</span>
                      <span>Complexity: {claim.complexity}/5</span>
                      <span>Fraud Score: {claim.fraudScore}%</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', marginLeft: '16px', minWidth: '120px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#06b6d4', marginBottom: '8px' }}>{claim.aiRecommendations}</div>
                    <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '12px' }}>AI Insights</p>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#cbd5e1', background: 'rgba(71, 85, 105, 0.3)', padding: '4px 12px', borderRadius: '4px' }}>
                      ~{claim.cycleTimeEstimate}
                    </div>
                  </div>
                  <ChevronRight style={{ width: '20px', height: '20px', color: '#64748b', marginLeft: '16px' }} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  // Investigation View
  const InvestigationView = () => (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <div style={{ background: 'rgba(30, 41, 59, 0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(71, 85, 105, 0.3)', position: 'sticky', top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={() => setStage('dashboard')}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '16px', transition: 'all 0.3s' }}
              onMouseEnter={(e) => e.target.style.color = '#cbd5e1'}
              onMouseLeave={(e) => e.target.style.color = '#94a3b8'}
            >
              ← Back
            </button>
            <div>
              <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: '0' }}>{selectedClaim?.id}</h1>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: '0' }}>{selectedClaim?.claimant} • {selectedClaim?.incident}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ padding: '8px 16px', borderRadius: '8px', background: 'rgba(71, 85, 105, 0.3)', color: '#cbd5e1', border: 'none', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>
              Save Draft
            </button>
            <button style={{ padding: '8px 16px', borderRadius: '8px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: '500', transition: 'all 0.3s' }}>
              Approve & Move to Settlement
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
          {/* Left Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Investigation Summary */}
            <div style={{ background: 'linear-gradient(135deg, rgba(55, 65, 81, 0.3) 0%, rgba(30, 41, 59, 0.3) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', display: 'flex', gap: '8px', alignItems: 'center', margin: '0' }}>
                  <Zap style={{ width: '20px', height: '20px', color: '#06b6d4' }} />
                  AI Investigation Summary
                </h2>
                <span style={{ fontSize: '12px', background: '#164e63', color: '#06b6d4', padding: '4px 12px', borderRadius: '4px', fontWeight: '500' }}>
                  Autonomous Agent Report
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { title: '📋 Incident Analysis', text: 'Rear-end collision on I-95 northbound near exit 42. Police report filed. Vehicle impact consistent with reported speeds. Medical records show minor soft-tissue injury, treatment completed.' },
                  { title: '⚖️ Liability Assessment', text: 'Clear Liability (At-Fault Driver) - 95% Confidence. Police report indicates defendant failed to maintain safe following distance. No comparative fault found.' },
                  { title: '🗂️ Coverage Check', text: '✓ All claims covered under policy CLM-POL-2024-8421. Policy limits: $100k liability, $50k medical. All damages fall within limits.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(71, 85, 105, 0.2)' }}>
                    <p style={{ color: '#cbd5e1', fontWeight: '500', margin: '0 0 8px 0' }}>{item.title}</p>
                    <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0', lineHeight: '1.6' }}>{item.text}</p>
                  </div>
                ))}
                <div style={{ background: 'rgba(22, 163, 74, 0.2)', border: '1px solid rgba(34, 197, 94, 0.4)', padding: '16px', borderRadius: '8px' }}>
                  <p style={{ color: '#cbd5e1', fontWeight: '500', margin: '0 0 8px 0' }}>✅ Fraud Check Status</p>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0' }}>No red flags detected. Medical provider verified. Vehicle repair within normal range.</p>
                </div>
              </div>
            </div>

            {/* Documents Processed */}
            <div style={{ background: 'rgba(55, 65, 81, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', padding: '24px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', color: 'white', display: 'flex', gap: '8px', alignItems: 'center', margin: '0 0 16px 0' }}>
                <FileText style={{ width: '20px', height: '20px', color: '#60a5fa' }} />
                Documents Analyzed by Agent (6)
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { name: 'Police Report', status: 'Extracted & Verified', insights: 'Fault determination, scene details' },
                  { name: 'Medical Records', status: 'Analyzed', insights: 'Injury severity, treatment plan' },
                  { name: 'Repair Estimate', status: 'Validated', insights: '$18,500 - within market range' },
                  { name: 'Photo Evidence (24)', status: 'Processed', insights: 'Vehicle damage pattern confirmed' },
                  { name: 'Policy Documents', status: 'Cross-referenced', insights: 'All coverages applicable' },
                  { name: 'Witness Statements', status: 'Synthesized', insights: 'Corroborates police findings' },
                ].map((doc, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '12px', background: 'rgba(30, 41, 59, 0.4)', borderRadius: '8px', border: '1px solid rgba(71, 85, 105, 0.15)' }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#cbd5e1', fontWeight: '500', fontSize: '14px', margin: '0 0 4px 0' }}>{doc.name}</p>
                      <p style={{ color: '#64748b', fontSize: '12px', margin: '0' }}>{doc.insights}</p>
                    </div>
                    <span style={{ fontSize: '12px', background: '#1e3a8a', color: '#bfdbfe', padding: '4px 8px', borderRadius: '4px', fontWeight: '500', marginLeft: '12px' }}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Agent Recommendation */}
            <div style={{ background: 'linear-gradient(135deg, rgba(30, 87, 144, 0.4) 0%, rgba(30, 58, 138, 0.4) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(6, 182, 212, 0.5)', borderRadius: '12px', padding: '24px', position: 'sticky', top: '100px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
                <Zap style={{ width: '20px', height: '20px', color: '#06b6d4' }} />
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#06b6d4' }}>AGENT RECOMMENDATION</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <p style={{ color: '#cbd5e1', fontSize: '12px', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px', margin: '0 0 8px 0' }}>Recommended Settlement</p>
                  <p style={{ fontSize: '48px', fontWeight: 'bold', color: 'white', margin: '0' }}>$22,450</p>
                  <p style={{ fontSize: '12px', color: '#94a3b8', margin: '4px 0 0 0' }}>Based on 847 comparable claims</p>
                </div>

                <div style={{ background: 'rgba(30, 41, 59, 0.5)', padding: '12px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Medical Expenses', value: '$3,200' },
                    { label: 'Vehicle Repairs', value: '$18,500' },
                    { label: 'Pain & Suffering', value: '$750' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                      <span style={{ color: '#94a3b8' }}>{item.label}</span>
                      <span style={{ color: '#cbd5e1', fontWeight: '500' }}>{item.value}</span>
                    </div>
                  ))}
                  <div style={{ borderTop: '1px solid rgba(71, 85, 105, 0.3)', paddingTop: '8px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '14px', fontWeight: 'bold' }}>
                    <span style={{ color: '#cbd5e1' }}>Total</span>
                    <span style={{ color: '#06b6d4' }}>$22,450</span>
                  </div>
                </div>

                <div style={{ background: 'rgba(120, 53, 15, 0.2)', border: '1px solid rgba(251, 146, 60, 0.4)', padding: '12px', borderRadius: '8px' }}>
                  <p style={{ color: '#fbbf24', fontSize: '12px', fontWeight: '500', margin: '0 0 4px 0' }}>⚠️ Settlement Range</p>
                  <p style={{ color: '#94a3b8', fontSize: '12px', margin: '0' }}>Conservative: $20,000 | Market: $22,450 | Aggressive: $25,000</p>
                </div>

                <button style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', background: 'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)', color: 'white', border: 'none', cursor: 'pointer', fontWeight: '600', transition: 'all 0.3s' }}>
                  Use This Recommendation
                </button>
                <button style={{ width: '100%', padding: '8px 16px', borderRadius: '8px', border: '1px solid rgba(71, 85, 105, 0.3)', color: '#cbd5e1', background: 'none', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s' }}>
                  Customize Amount
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ background: 'rgba(55, 65, 81, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 'bold', margin: '0 0 12px 0' }}>Quick Actions</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { icon: MessageSquare, label: 'Generate Settlement Letter' },
                  { icon: AlertCircle, label: 'Escalate to SIU (Fraud Review)' },
                  { icon: DollarSign, label: 'Request Appraisal Review' },
                ].map((action, i) => (
                  <button key={i} style={{ width: '100%', textAlign: 'left', padding: '12px', borderRadius: '8px', background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer', fontSize: '14px', display: 'flex', gap: '8px', alignItems: 'center', transition: 'all 0.3s' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(71, 85, 105, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                  >
                    <action.icon style={{ width: '16px', height: '16px' }} /> {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Audit Trail */}
            <div style={{ background: 'rgba(55, 65, 81, 0.2)', backdropFilter: 'blur(10px)', border: '1px solid rgba(71, 85, 105, 0.3)', borderRadius: '12px', padding: '16px' }}>
              <p style={{ fontSize: '12px', textTransform: 'uppercase', color: '#94a3b8', fontWeight: 'bold', margin: '0 0 12px 0' }}>Agent Activity Timeline</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px' }}>
                {[
                  { time: '14:35', action: 'Documents ingested & classified' },
                  { time: '14:38', action: 'Fraud analysis completed' },
                  { time: '14:41', action: 'Liability assessment: 95% confidence' },
                  { time: '14:44', action: 'Settlement recommendation generated' },
                  { time: '14:45', action: 'Awaiting adjuster review' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#64748b' }}>{item.time}</span>
                    <span style={{ color: '#94a3b8' }}>{item.action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return stage === 'dashboard' ? <DashboardView /> : <InvestigationView />;
}
