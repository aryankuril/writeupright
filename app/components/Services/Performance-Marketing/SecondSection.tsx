"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Search, Monitor, Video, Music, Users, Tag, BarChart2, AlertCircle } from "lucide-react";
import InfoStrip from "../../InfoStrip";

// FourthSection.tsx
// Place the screenshot images into your public/images folder as:
// - /public/images/fourth-google.png
// - /public/images/fourth-meta.png
// - /public/images/fourth-video.png
// - /public/images/fourth-spotify.png
// This component is a single-file Next.js + Tailwind component. Default export is the component.

type TabKey = "google" | "meta" | "video" | "spotify";

export default function SecondSection() {
  const [tab, setTab] = useState<TabKey>("google");

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12" aria-label="Fourth section - Ads overview">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        {/* Tabs */}
        <nav className="flex items-center gap-3 bg-gray-50 p-2 rounded-full w-full overflow-x-auto">
          <Tab
            label="Google Ads"
            icon={<Search className="w-4 h-4" />}
            active={tab === "google"}
            onClick={() => setTab("google")}
          />
          <Tab
            label="Meta Ads"
            icon={<Users className="w-4 h-4" />}
            active={tab === "meta"}
            onClick={() => setTab("meta")}
          />
          <Tab
            label="Video Ads"
            icon={<Video className="w-4 h-4" />}
            active={tab === "video"}
            onClick={() => setTab("video")}
          />
          <Tab
            label="Spotify"
            icon={<Music className="w-4 h-4" />}
            active={tab === "spotify"}
            onClick={() => setTab("spotify")}
          />
        </nav>

        {/* Content panels */}
        <div className="mt-6">
          {tab === "google" && (
            <Panel title="Google Ads: Search & Display">
              <div className="space-y-6">
                <InfoStrip title={""} description={""} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card>
                    <h4 className="text-sm font-medium text-gray-600">Search Intent: Connect at the Moment of Need</h4>
                    <p className="mt-3 text-xs text-gray-500">Reach customers actively searching for solutions like yours.</p>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <Metric label="User Searches" value={`"best running shoes for marathons"`} />
                      <Metric label="Your Ad Appears" value="Premium marathon shoes - Free shipping & returns" />
                      <Metric label="User Converts" value="Click → Visit → Purchase" />
                    </div>
                  </Card>

                  <Card className="lg:col-span-2">
                    <h4 className="text-sm font-medium text-gray-600">Display Network: Massive Reach Across the Web</h4>
                    <div className="mt-4 flex flex-col lg:flex-row items-center gap-6">
                      <div className="flex-1">
                        <div className="bg-gradient-to-r from-indigo-50 to-pink-50 rounded-xl p-6">
                          <div className="h-40 w-full rounded-md bg-white/60 flex items-center justify-center relative">
                            {/* Decorative center node */}
                            <div className="absolute -translate-y-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">Ad</div>
                          </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <SmallStat label="Network Reach" value="2M+ Websites & Apps" />
                          <SmallStat label="Creative" value="Visual Storytelling & Retargeting" />
                        </div>
                      </div>

                      <div className="w-full lg:w-64">
                        <CampaignPerformance />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Panel>
          )}

          {tab === "meta" && (
            <Panel title="Meta Ads: Facebook & Instagram">
              <div className="space-y-6">
                <Card>
                  <h4 className="text-sm font-medium text-gray-600">Precision Audience Targeting</h4>
                  <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
                    <Pill label="Age" />
                    <Pill label="Locations" />
                    <Pill label="Interests" />
                    <Pill label="Behaviors" />
                  </div>
                </Card>

                <Card>
                  <h4 className="text-sm font-medium text-gray-600">Engaging Creative That Stops the Scroll</h4>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                    <div className="col-span-1 md:col-span-2 rounded-lg overflow-hidden bg-neutral-50">
                      <Image src="/images/fourth-meta.png" alt="meta mock" width={800} height={800} className="object-cover" />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500">Examples of mobile-first creative for Instagram Story and Facebook Feed.</p>
                      <ul className="mt-3 space-y-2 text-xs text-gray-500">
                        <li>Higher engagement with video on mobile</li>
                        <li>Lookalike Audience: Scale your success</li>
                        <li>Measure and iterate with Meta's analytics</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            </Panel>
          )}

          {tab === "video" && (
            <Panel title="YouTube & TikTok: Video Advertising">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <h4 className="text-sm font-medium text-gray-600">YouTube — Horizontal</h4>
                    <div className="mt-4 rounded-md overflow-hidden bg-neutral-50">
                      <Image src="/images/fourth-video.png" alt="video mock" width={900} height={500} className="object-cover" />
                    </div>
                    <ul className="mt-4 text-xs text-gray-500 space-y-2">
                      <li>Long-form content & intent-based targeting</li>
                      <li>Best for educational content & brand storytelling</li>
                    </ul>
                  </Card>

                  <Card>
                    <h4 className="text-sm font-medium text-gray-600">TikTok — Vertical</h4>
                    <div className="mt-4 rounded-md overflow-hidden bg-neutral-50">
                      <div className="h-80 w-full flex items-center justify-center">Vertical ad preview</div>
                    </div>
                    <ul className="mt-4 text-xs text-gray-500 space-y-2">
                      <li>Short & snappy formats for quick consumption</li>
                      <li>Trend-driven creative performs well</li>
                    </ul>
                  </Card>
                </div>

                <Card>
                  <h4 className="text-sm font-medium text-gray-600">Why Video Ads Work</h4>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-xs text-gray-500">
                      <p>Emotional impact and higher conversions when video is used appropriately.</p>
                    </div>
                    <div className="space-y-2 text-xs text-gray-500">
                      <p>Measurable CTAs: Visit website, Shop product pages, Download apps, Subscribe.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </Panel>
          )}

          {tab === "spotify" && (
            <Panel title="Spotify Ads: Audio & Podcast Advertising">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <h4 className="text-sm font-medium text-gray-600">Audio Engagement</h4>
                    <div className="mt-4 rounded-lg overflow-hidden bg-green-50 p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-lg bg-white/40 flex items-center justify-center">
                          <AlertCircle className="w-6 h-6 text-green-700" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">Now Playing</p>
                          <p className="text-xs text-gray-600">Chill Vibes Playlist</p>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-gray-600">Audio ads reach listeners during unique moments — workouts, commuting, or relaxing.</p>
                    </div>
                  </Card>

                  <Card>
                    <h4 className="text-sm font-medium text-gray-600">Contextual Targeting</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill label="Workout" />
                      <Pill label="Commute" />
                      <Pill label="Focus" />
                      <Pill label="Party" />
                    </div>
                  </Card>
                </div>

                <Card>
                  <h4 className="text-sm font-medium text-gray-600">Why Audio Advertising Works</h4>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-600">
                    <div className="p-4 rounded-lg bg-green-50">500M+ Spotify listeners ready to engage with your brand</div>
                    <div className="p-4 rounded-lg bg-blue-50">75% of listeners take action after hearing an ad</div>
                    <div className="p-4 rounded-lg bg-purple-50">24% higher ad recall vs traditional radio</div>
                  </div>
                </Card>
              </div>
            </Panel>
          )}
        </div>
      </div>
    </section>
  );
}

function Tab({ label, icon, active, onClick }: { label: string; icon: React.ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
        active ? "bg-white shadow-sm text-gray-800" : "text-gray-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white border border-gray-100 rounded-xl p-4 shadow-sm ${className}`}>{children}</div>;
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-50 rounded-md p-3 text-xs text-gray-600">
      <div className="font-medium text-sm">{label}</div>
      <div className="mt-1">{value}</div>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-md p-3 border border-gray-100 text-xs">
      <div className="text-[10px] text-gray-400">{label}</div>
      <div className="mt-1 font-semibold text-sm text-gray-700">{value}</div>
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return <span className="text-xs px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-600">{label}</span>;
}

function CampaignPerformance() {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4">
      <h4 className="text-xs font-medium text-gray-600">Campaign Performance</h4>
      <div className="mt-3 grid grid-cols-1 gap-3 text-xs text-gray-600">
        <PerfItem label="Click-through Rate" value="4.2% (+0.2%)" />
        <PerfItem label="Conversion Rate" value="12.5% (+2.2%)" />
        <PerfItem label="Cost Per Conversion" value="$24.50 (-$1.20)" />
        <PerfItem label="Return on Ad Spend" value="4.8x (+0.6x)" />
      </div>
      <div className="mt-4 text-[11px] text-gray-500">Data-driven optimization: Our algorithms continuously analyze performance to adjust bids, targeting, and creative.</div>
    </div>
  );
}

function PerfItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-500">{label}</div>
      <div className="font-semibold text-gray-700">{value}</div>
    </div>
  );
}
