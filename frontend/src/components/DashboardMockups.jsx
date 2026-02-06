import React from 'react';
import { 
  Shield, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Search,
  Bell,
  Settings
} from 'lucide-react';

const DashboardMockups = () => {
  const stats = [
    { label: 'Total Verifications', value: '1,284,392', change: '+12.5%', up: true, icon: Users },
    { label: 'Fraud Blocked', value: '8,421', change: '+3.2%', up: true, icon: Shield },
    { label: 'Success Rate', value: '99.87%', change: '+0.3%', up: true, icon: CheckCircle2 },
    { label: 'Pending Reviews', value: '142', change: '-8.1%', up: false, icon: AlertTriangle },
  ];

  const recentActivity = [
    { id: 'VRF-2847', type: 'Identity Verified', status: 'success', time: '2 min ago', user: 'john.d***@email.com' },
    { id: 'VRF-2846', type: 'Document Check', status: 'success', time: '5 min ago', user: 'sarah.m***@email.com' },
    { id: 'VRF-2845', type: 'Fraud Alert', status: 'warning', time: '8 min ago', user: 'mike.r***@email.com' },
    { id: 'VRF-2844', type: 'KYC Complete', status: 'success', time: '12 min ago', user: 'emma.w***@email.com' },
    { id: 'VRF-2843', type: 'Liveness Failed', status: 'error', time: '15 min ago', user: 'alex.t***@email.com' },
  ];

  const chartData = [65, 72, 68, 85, 78, 92, 88, 95, 91, 87, 94, 98];

  return (
    <div className="py-24 relative" data-testid="dashboard-section">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-2 rounded-full bg-veritrust-green/10 border border-veritrust-green/30 text-sm font-mono text-veritrust-green uppercase tracking-wider mb-4">
            Dashboard Preview
          </span>
          <h2 className="section-heading mb-4">Analytics Dashboard</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A glimpse into the VeriTrust AI admin dashboard with real-time analytics and fraud monitoring.
          </p>
        </div>

        {/* Dashboard Mockup */}
        <div className="dashboard-frame">
          {/* Browser Chrome */}
          <div className="flex items-center gap-2 mb-4 px-4 py-2 bg-veritrust-bg-dark rounded-lg">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-veritrust-bg-paper rounded-full px-4 py-1.5 text-xs text-veritrust-text-muted font-mono">
                dashboard.veritrust.ai
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="bg-veritrust-bg-dark rounded-xl overflow-hidden border border-white/10">
            {/* Top Nav */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-veritrust-green flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black" />
                </div>
                <span className="font-outfit font-semibold text-white">VeriTrust AI</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                  <Search className="w-4 h-4 text-veritrust-text-muted" />
                  <span className="text-sm text-veritrust-text-muted">Search...</span>
                </div>
                <button className="p-2 rounded-lg hover:bg-white/5 transition-colors relative">
                  <Bell className="w-5 h-5 text-veritrust-text-secondary" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-veritrust-green rounded-full" />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <Settings className="w-5 h-5 text-veritrust-text-secondary" />
                </button>
                <div className="w-8 h-8 rounded-full bg-veritrust-blue flex items-center justify-center">
                  <span className="text-xs font-medium text-white">JD</span>
                </div>
              </div>
            </div>

            <div className="p-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    className="bg-veritrust-bg-paper rounded-xl p-4 border border-white/5 hover:border-veritrust-green/30 transition-colors"
                    data-testid={`dashboard-stat-${idx}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-2 rounded-lg bg-white/5">
                        <stat.icon className="w-4 h-4 text-veritrust-green" />
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                        {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {stat.change}
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-white font-outfit mb-1">{stat.value}</p>
                    <p className="text-xs text-veritrust-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Chart Area */}
                <div className="lg:col-span-2 bg-veritrust-bg-paper rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-outfit font-semibold text-white">Verification Volume</h3>
                      <p className="text-sm text-veritrust-text-muted">Last 12 hours</p>
                    </div>
                    <button className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-veritrust-text-muted" />
                    </button>
                  </div>

                  {/* Simple Chart Visualization */}
                  <div className="h-48 flex items-end gap-2">
                    {chartData.map((value, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-veritrust-green/20 rounded-t-sm relative group cursor-pointer"
                          style={{ height: `${value}%` }}
                        >
                          <div 
                            className="absolute bottom-0 w-full bg-veritrust-green rounded-t-sm transition-all"
                            style={{ height: `${value * 0.7}%` }}
                          />
                          <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-veritrust-bg-dark rounded text-xs text-veritrust-green opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {value}%
                          </div>
                        </div>
                        <span className="text-[10px] text-veritrust-text-muted">{idx + 1}h</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="bg-veritrust-bg-paper rounded-xl p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-outfit font-semibold text-white">Recent Activity</h3>
                    <Activity className="w-4 h-4 text-veritrust-green" />
                  </div>

                  <div className="space-y-4">
                    {recentActivity.map((activity, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 ${
                          activity.status === 'success' ? 'bg-green-400' :
                          activity.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-veritrust-text-muted">{activity.id}</span>
                            <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                              activity.status === 'success' ? 'bg-green-400/10 text-green-400' :
                              activity.status === 'warning' ? 'bg-yellow-400/10 text-yellow-400' : 'bg-red-400/10 text-red-400'
                            }`}>
                              {activity.type}
                            </span>
                          </div>
                          <p className="text-xs text-veritrust-text-muted truncate">{activity.user}</p>
                          <p className="text-[10px] text-veritrust-text-muted">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[
                  { label: 'API Calls Today', value: '2.4M', icon: TrendingUp },
                  { label: 'Avg Response Time', value: '127ms', icon: Activity },
                  { label: 'Active Clients', value: '847', icon: Users },
                ].map((item, idx) => (
                  <div key={idx} className="bg-veritrust-bg-paper rounded-lg p-4 border border-white/5 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-veritrust-blue/10">
                      <item.icon className="w-4 h-4 text-veritrust-blue" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-white font-outfit">{item.value}</p>
                      <p className="text-xs text-veritrust-text-muted">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Mockups */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Mobile Dashboard */}
          <div className="glass-card p-6">
            <h3 className="font-outfit font-semibold text-white mb-4">Mobile View</h3>
            <div className="flex justify-center">
              <div className="w-64 aspect-[9/16] bg-veritrust-bg-dark rounded-3xl border-4 border-white/10 overflow-hidden">
                <div className="h-6 bg-black" />
                <div className="p-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-veritrust-green flex items-center justify-center">
                      <Shield className="w-4 h-4 text-black" />
                    </div>
                    <span className="text-sm font-outfit font-semibold text-white">Dashboard</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {stats.slice(0, 4).map((stat, idx) => (
                      <div key={idx} className="bg-veritrust-bg-paper rounded-lg p-2">
                        <p className="text-xs font-bold text-white">{stat.value}</p>
                        <p className="text-[8px] text-veritrust-text-muted truncate">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="h-20 bg-veritrust-bg-paper rounded-lg p-2">
                    <div className="flex items-end gap-1 h-full">
                      {chartData.slice(0, 8).map((v, i) => (
                        <div key={i} className="flex-1 bg-veritrust-green/50 rounded-t" style={{ height: `${v}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tablet Dashboard */}
          <div className="glass-card p-6">
            <h3 className="font-outfit font-semibold text-white mb-4">Tablet View</h3>
            <div className="aspect-[4/3] bg-veritrust-bg-dark rounded-2xl border-4 border-white/10 overflow-hidden">
              <div className="h-8 bg-veritrust-bg-paper border-b border-white/10 flex items-center px-4 gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
              </div>
              <div className="p-4">
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {stats.map((stat, idx) => (
                    <div key={idx} className="bg-veritrust-bg-paper rounded-lg p-2">
                      <p className="text-sm font-bold text-white">{stat.value}</p>
                      <p className="text-[10px] text-veritrust-text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="col-span-2 h-32 bg-veritrust-bg-paper rounded-lg p-3">
                    <div className="flex items-end gap-1 h-full">
                      {chartData.map((v, i) => (
                        <div key={i} className="flex-1 bg-veritrust-green/50 rounded-t" style={{ height: `${v}%` }} />
                      ))}
                    </div>
                  </div>
                  <div className="bg-veritrust-bg-paper rounded-lg p-2 space-y-2">
                    {recentActivity.slice(0, 4).map((a, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <div className={`w-1.5 h-1.5 rounded-full ${
                          a.status === 'success' ? 'bg-green-400' : a.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                        }`} />
                        <span className="text-[8px] text-veritrust-text-muted truncate">{a.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockups;
