require('dotenv').config(); const { OpenAI } = require('openai'); const axios = require('axios');

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**

AI Lead Brain: Generates personalized messaging based on lead profile and channel. */ async function generateOutreachMessage(lead, channel) { const prompt = You are an elite sales outreach specialist. Write a short, engaging message for ${lead.name} who is a ${lead.role} at ${lead.company}. Context: They recently posted about ${lead.recent_activity}. Channel: ${channel} Constraint: Keep it under 50 words and focus on a specific pain point.;

const response = await openai.chat.completions.create({ model: "gpt-4-turbo", messages: [{ role: "user", content: prompt }], });

return response.choices[0].message.content; }

/**

Omni-Bridge: Dispatches messages to the specific platform API. */ async function dispatchMessage(lead, message, channel) { console.log([STaqlt Dispatcher] Routing to ${channel} for lead: ${lead.name});

// Mock API implementations for multi-channel bridges const bridges = { linkedin: async () => console.log(LinkedIn Direct Message Sent: ${message}), whatsapp: async () => console.log(WhatsApp API Message Sent: ${message}), email: async () => console.log(SES/SendGrid Email Sent: ${message}), twitter: async () => console.log(X (Twitter) DM Sent: ${message}) };

if (bridges[channel]) { await bridgeschannel; return { status: 'success', channel }; } throw new Error('Unsupported channel'); }

/**

Main Orchestrator Logic */ async function startOutreachCampaign(leads) { for (const lead of leads) { // AI selects the best initial channel based on lead data const channel = lead.preferred_channel || 'linkedin'; const message = await generateOutreachMessage(lead, channel);

 await dispatchMessage(lead, message, channel);


} }

// Example Lead Data const campaignLeads = [ { name: "John Doe", role: "CTO", company: "TechFlow", recent_activity: "scaling cloud infra", preferred_channel: "linkedin" }, { name: "Jane Smith", role: "Founder", company: "GreenGrid", recent_activity: "sustainable energy AI", preferred_channel: "whatsapp" } ];

startOutreachCampaign(campaignLeads).then(() => console.log("Campaign execution complete."));