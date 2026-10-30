'use client'

import React, { useState } from 'react'
import {
  CheckCircle2,
} from '@/components/ui/Icons'

type SystemModule = 'inventory' | 'ai-pipeline' | 'gateway'

export default function ColverLiveConsole() {
  const [activeModule, setActiveModule] = useState<SystemModule>('inventory')
  const [inventoryStock, setInventoryStock] = useState<number>(84)
  const [invoiceType, setInvoiceType] = useState<'tax-invoice' | 'purchase-order'>('tax-invoice')
  const [gatewayLoad, setGatewayLoad] = useState<'nominal' | 'surge'>('nominal')

  return (
    <div className="w-full rounded-xl bg-card overflow-hidden" data-ui="colver-system-console">
      {/* Console Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 bg-surface">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
          </div>
          <span className="text-sm font-semibold text-foreground">
            Colver System Console
          </span>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[13px] text-slate-300 font-medium">
            Engine Active
          </span>
        </div>
      </div>

      {/* Module Selector Navigation Tabs */}
      <div className="grid grid-cols-3 bg-card text-center">
        <button
          type="button"
          onClick={() => setActiveModule('inventory')}
          className={`
            py-3 px-3 text-sm font-medium transition-colors cursor-pointer
            ${activeModule === 'inventory' ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground'}
          `}
        >
          Inventory ERP
        </button>
        <button
          type="button"
          onClick={() => setActiveModule('ai-pipeline')}
          className={`
            py-3 px-3 text-sm font-medium transition-colors cursor-pointer
            ${activeModule === 'ai-pipeline' ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground'}
          `}
        >
          AI Pipeline
        </button>
        <button
          type="button"
          onClick={() => setActiveModule('gateway')}
          className={`
            py-3 px-3 text-sm font-medium transition-colors cursor-pointer
            ${activeModule === 'gateway' ? 'text-foreground bg-surface font-semibold' : 'text-slate-400 hover:text-foreground'}
          `}
        >
          API Gateway
        </button>
      </div>

      {/* Interactive Screen Display */}
      <div className="p-6 sm:p-7">
        {/* Module 1: Inventory & Supply Chain Rebalancing */}
        {activeModule === 'inventory' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  Multi-Godown Stock Orchestration
                </h4>
                <p className="text-sm text-slate-400">
                  Simulate live demand to test automated rebalance thresholds across facilities.
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="text-[13px] text-slate-400">Telemetry Latency</span>
                <p className="text-sm font-semibold text-foreground">4.2ms Edge Sync</p>
              </div>
            </div>

            {/* Interactive Slider */}
            <div className="p-4 rounded-lg bg-surface space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Regional Demand Pressure</span>
                <span className="font-semibold text-foreground">{inventoryStock}% Capacity</span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={inventoryStock}
                onChange={(e) => setInventoryStock(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
                aria-label="Simulate regional demand load percentage"
              />
              <div className="flex items-center justify-between text-[13px] text-slate-400">
                <span>Low Demand (20%)</span>
                <span>Peak Load (100%)</span>
              </div>
            </div>

            {/* Facility Status Feed */}
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <div>
                  <span className="font-semibold text-foreground block">Bengaluru Central Godown</span>
                  <span className="text-[13px] text-slate-400">Primary Hub Depot</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-foreground block">{Math.round(inventoryStock * 12.4)} Units</span>
                  <span className="text-[13px] text-emerald-400 font-medium">Synchronized</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <div>
                  <span className="font-semibold text-foreground block">Mumbai Western Depot</span>
                  <span className="text-[13px] text-slate-400">Direct Port Rail</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-foreground block">{Math.round(inventoryStock * 8.8)} Units</span>
                  <span className="text-[13px] text-emerald-400 font-medium">Auto-Routed</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <div>
                  <span className="font-semibold text-foreground block">Delhi North Distribution</span>
                  <span className="text-[13px] text-slate-400">Regional Gateway</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-foreground block">{Math.round(inventoryStock * 6.5)} Units</span>
                  <span className="text-[13px] text-emerald-400 font-medium">Rebalanced</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Module 2: AI Document & OCR Ingestion */}
        {activeModule === 'ai-pipeline' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  Automated Extraction Pipeline
                </h4>
                <p className="text-sm text-slate-400">
                  Structured OCR and ledger mapping for enterprise billing and logistics.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setInvoiceType('tax-invoice')}
                  className={`
                    px-3 py-1.5 rounded-md text-[13px] font-semibold cursor-pointer transition-colors
                    ${invoiceType === 'tax-invoice' ? 'bg-primary text-white' : 'bg-surface text-slate-300 hover:text-foreground'}
                  `}
                >
                  GST Invoice
                </button>
                <button
                  type="button"
                  onClick={() => setInvoiceType('purchase-order')}
                  className={`
                    px-3 py-1.5 rounded-md text-[13px] font-semibold cursor-pointer transition-colors
                    ${invoiceType === 'purchase-order' ? 'bg-primary text-white' : 'bg-surface text-slate-300 hover:text-foreground'}
                  `}
                >
                  Purchase Order
                </button>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-surface space-y-3">
              <div className="flex items-center justify-between text-[13px] text-slate-400">
                <span>Schema: {invoiceType === 'tax-invoice' ? 'GSTIN_B2B_V2' : 'PO_SUPPLIER_V1'}</span>
                <span className="text-emerald-400 font-semibold">99.4% Confidence</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div>
                  <span className="text-[13px] text-slate-400 block">Document ID</span>
                  <p className="text-sm font-semibold text-foreground">
                    {invoiceType === 'tax-invoice' ? 'INV-2026-9021' : 'PO-4091-BLR'}
                  </p>
                </div>
                <div>
                  <span className="text-[13px] text-slate-400 block">Line Items</span>
                  <p className="text-sm font-semibold text-foreground">
                    {invoiceType === 'tax-invoice' ? '18 Verified' : '6 Verified'}
                  </p>
                </div>
                <div>
                  <span className="text-[13px] text-slate-400 block">Reconciliation</span>
                  <p className="text-sm font-semibold text-emerald-400">Match 100%</p>
                </div>
                <div>
                  <span className="text-[13px] text-slate-400 block">Pipeline Speed</span>
                  <p className="text-sm font-semibold text-foreground">68ms</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-[13px] text-slate-400 pt-1">
              <span>Automatic webhook dispatched to ERP ledger</span>
              <span className="text-foreground font-medium">Status: Delivered (200 OK)</span>
            </div>
          </div>
        )}

        {/* Module 3: High-Concurrency API & Auth Gateway */}
        {activeModule === 'gateway' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-foreground">
                  Edge Gateway & Threat Defense
                </h4>
                <p className="text-sm text-slate-400">
                  Sub-millisecond token authentication, rate limiting, and edge caching.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGatewayLoad('nominal')}
                  className={`
                    px-3 py-1.5 rounded-md text-[13px] font-semibold cursor-pointer transition-colors
                    ${gatewayLoad === 'nominal' ? 'bg-primary text-white' : 'bg-surface text-slate-300 hover:text-foreground'}
                  `}
                >
                  Standard Load
                </button>
                <button
                  type="button"
                  onClick={() => setGatewayLoad('surge')}
                  className={`
                    px-3 py-1.5 rounded-md text-[13px] font-semibold cursor-pointer transition-colors
                    ${gatewayLoad === 'surge' ? 'bg-primary text-white' : 'bg-surface text-slate-300 hover:text-foreground'}
                  `}
                >
                  Surge Load (10k req/s)
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <span className="font-semibold text-foreground">Edge P99 Response Latency</span>
                <span className="font-bold text-emerald-400">{gatewayLoad === 'nominal' ? '12ms' : '19ms'}</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <span className="font-semibold text-foreground">Sustained Gateway Throughput</span>
                <span className="font-bold text-foreground">{gatewayLoad === 'nominal' ? '850 req/s' : '10,400 req/s'}</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface text-sm">
                <span className="font-semibold text-foreground">Edge Cache Hit Ratio</span>
                <span className="font-bold text-emerald-400">94.8% Direct Edge Response</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Console Bottom Bar */}
      <div className="px-6 sm:px-7 py-3.5 bg-surface flex items-center justify-between text-[13px] text-slate-400">
        <span>Architected by Colver Engineering Studio</span>
        <span className="text-foreground font-medium">Bengaluru, India</span>
      </div>
    </div>
  )
}
