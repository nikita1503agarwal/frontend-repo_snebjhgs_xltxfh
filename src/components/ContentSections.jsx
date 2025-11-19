import React from 'react'
import { Section, CardGrid, Card } from './Sections'

const Bullet = ({ children }) => (
  <li className="flex gap-3">
    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-blue-400"></span>
    <span className="text-blue-100/90">{children}</span>
  </li>
)

const ContentSections = () => {
  return (
    <>
      <Section id="subheadline" title="Subheadline">
        <p className="text-blue-100/90 text-lg max-w-3xl">
          Stop drowning in emails, tenant follow-ups, and leasing bottlenecks. Sunridge-AI gives your team instant capacity without hiring more staff.
        </p>
      </Section>

      <Section id="who-we-help" title="Who We Help">
        <ul className="space-y-3">
          <Bullet>80 to 1,500 units</Bullet>
          <Bullet>Multifamily, commercial, or mixed-use portfolios</Bullet>
          <Bullet>Teams overwhelmed by leasing admin, communication delays, and operational inefficiencies</Bullet>
        </ul>
      </Section>

      <Section id="benefits" title="Core Benefits">
        <CardGrid>
          <Card title="Automate Leasing End-to-End">
            AI handles inquiries, pre-screenings, appointment scheduling, follow-ups, and document collection, 24/7.
          </Card>
          <Card title="Reduce Operational Workload">
            Offload tenant communication, FAQs, rent-related questions, and maintenance triage.
          </Card>
          <Card title="Increase Occupancy & Reduce Vacancies">
            Faster response times lead to more booked tours, more qualified applicants, and fewer lost leads.
          </Card>
          <Card title="Save 15–30 Hours Weekly">
            Your team stops doing manual admin and focuses on higher-value decisions.
          </Card>
        </CardGrid>
      </Section>

      <Section id="problems" title="The Problems We Solve">
        <ul className="space-y-3">
          <Bullet>Slow response times</Bullet>
          <Bullet>Missed leasing inquiries</Bullet>
          <Bullet>Overloaded asset managers</Bullet>
          <Bullet>Manual document collection</Bullet>
          <Bullet>Back-and-forth tenant communication</Bullet>
          <Bullet>No automation between leasing and operations</Bullet>
          <Bullet>High operational costs</Bullet>
          <Bullet>Staff burnout</Bullet>
        </ul>
      </Section>

      <Section id="how-it-works" title="How Sunridge-AI Works">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Step 1 — Discovery</h3>
            <p className="text-blue-100/90 text-sm">We assess your workflows, bottlenecks, and operational goals.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Step 2 — Build and Automate</h3>
            <p className="text-blue-100/90 text-sm">We implement AI voice agents, workflow automations, and leasing funnels customized to your processes.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Step 3 — Integration</h3>
            <p className="text-blue-100/90 text-sm">We connect your CRM, leasing system, calendars, communication channels, and internal tools.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold mb-2">Step 4 — Results and Optimization</h3>
            <p className="text-blue-100/90 text-sm">Your team receives analytics, insights, and continuous automation upgrades.</p>
          </div>
        </div>
      </Section>

      <Section id="case-studies" title="Case Studies">
        <CardGrid>
          <Card title="Crestline Asset Management">
            <p className="text-blue-100/90 text-sm">Portfolio: 450 multifamily units</p>
            <p className="text-blue-100/90 text-sm">Problem: Missed leasing inquiries and slow follow-up</p>
            <p className="text-blue-100/90 text-sm">Solution: AI leasing agent and automated lead follow-up</p>
            <ul className="mt-3 space-y-2">
              <Bullet>73 percent faster lead response</Bullet>
              <Bullet>41 more tours booked per month</Bullet>
              <Bullet>Vacancies reduced from 9.2 percent to 5.8 percent in 60 days</Bullet>
            </ul>
          </Card>
          <Card title="WillowPark Holdings">
            <p className="text-blue-100/90 text-sm">Portfolio: 780 units</p>
            <p className="text-blue-100/90 text-sm">Problem: Team drowning in repetitive admin</p>
            <p className="text-blue-100/90 text-sm">Solution: AI tenant communication and maintenance triage</p>
            <ul className="mt-3 space-y-2">
              <Bullet>22 hours per week saved per asset manager</Bullet>
              <Bullet>96 percent of common questions automated</Bullet>
              <Bullet>Team focused on investor reporting and growth</Bullet>
            </ul>
          </Card>
          <Card title="GraniteSpace Commercial">
            <p className="text-blue-100/90 text-sm">Portfolio: 12 commercial buildings</p>
            <p className="text-blue-100/90 text-sm">Problem: Manual leasing coordination</p>
            <p className="text-blue-100/90 text-sm">Solution: Automated appointment scheduling and AI voice receptionist</p>
            <ul className="mt-3 space-y-2">
              <Bullet>All inquiry handling automated</Bullet>
              <Bullet>Leasing cycle shortened by 27 percent</Bullet>
              <Bullet>Zero missed calls</Bullet>
            </ul>
          </Card>
        </CardGrid>
      </Section>

      <Section id="deliverables" title="What We Deliver">
        <ul className="grid gap-3 md:grid-cols-2">
          <Bullet>24/7 AI leasing agent</Bullet>
          <Bullet>Intelligent tenant and owner voice agent</Bullet>
          <Bullet>Automated follow-ups via SMS, email, and voice</Bullet>
          <Bullet>Document collection automation</Bullet>
          <Bullet>Tour scheduling workflows</Bullet>
          <Bullet>Tenant qualification and pre-screening</Bullet>
          <Bullet>Custom dashboards and reporting</Bullet>
          <Bullet>Integrations with PMS, CRMs, calendars, VoIP, and internal tools</Bullet>
        </ul>
      </Section>

      <Section id="why-us" title="Why Asset-Management Firms Choose Sunridge-AI">
        <CardGrid cols="md:grid-cols-2 lg:grid-cols-2">
          <Card title="Built specifically for asset managers">Purpose-built solutions for leasing and operations.</Card>
          <Card title="Fast setup in 7–14 days">Proven playbooks and integrations accelerate launch.</Card>
          <Card title="Fully managed automation">We design, monitor, and iterate so your team doesn’t have to.</Card>
          <Card title="Immediate ROI">Time saved and increased occupancy from day one.</Card>
          <Card title="Enterprise-grade reliability">Secure, reliable, and compliant stack.</Card>
          <Card title="Ongoing optimization and support">Continuous improvements aligned to KPIs.</Card>
        </CardGrid>
      </Section>

      <Section id="faq" title="FAQ">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="How fast can we get started?">Most firms go live within 7 to 14 days after the discovery session.</Card>
          <Card title="Do you replace staff?">No. We augment your team so they can focus on strategic work instead of repetitive tasks.</Card>
          <Card title="Do the AI voice agents sound natural?">Yes. They use human-grade natural voices that adapt to tone and context.</Card>
          <Card title="What systems do you integrate with?">Yardi, Buildium, AppFolio, Google Workspace, calendars, CRMs, SMS providers, VoIP systems, and internal tools.</Card>
          <Card title="What if our processes are unique?">All automations and agents are customized to your workflows.</Card>
        </div>
      </Section>

      <Section id="final-cta" title="">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to save time and automate leasing?</h3>
          <p className="mt-3 text-blue-100/90">Schedule a Discovery Call</p>
          <div className="mt-6">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 shadow-lg shadow-blue-500/20 transition-colors"
            >
              Schedule a Discovery Call
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

export default ContentSections
