"use client";

interface Message {
  type: "incoming" | "outgoing";
  text: string;
  time?: string;
  aiBadge?: boolean;
}

interface WhatsAppMockupProps {
  messages: Message[];
  statusText?: string;
  contactName?: string;
  compact?: boolean;
}

export default function WhatsAppMockup({
  messages,
  statusText,
  contactName = "Otel AI Asistan",
  compact = false,
}: WhatsAppMockupProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] ${compact ? "max-w-[340px]" : "max-w-[380px]"}`}>
      {/* WhatsApp Header */}
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#128C7E] text-sm font-bold text-white">
          AI
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-white">{contactName}</p>
          <p className="text-xs text-[#b5d9d3]">çevrimiçi</p>
        </div>
        <div className="flex gap-4 text-white/70">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z" />
          </svg>
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4zm0 7a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>

      {/* Chat Body */}
      <div
        className="flex flex-col gap-2 px-3 py-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4cfc4' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: "#E5DDD5",
        }}
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.type === "outgoing" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`relative max-w-[85%] rounded-lg px-3 py-2 text-[13.5px] leading-relaxed shadow-sm ${
                msg.type === "outgoing"
                  ? "rounded-tr-none bg-[#DCF8C6] text-[#111]"
                  : "rounded-tl-none bg-white text-[#111]"
              }`}
            >
              {msg.aiBadge && (
                <span className="mb-1 inline-block rounded bg-teal/15 px-1.5 py-0.5 text-[10px] font-semibold text-teal">
                  AI
                </span>
              )}
              <p className="whitespace-pre-wrap">{msg.text}</p>
              <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-[#999]">
                {msg.time || "14:32"}
                {msg.type === "outgoing" && (
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="#53bdeb">
                    <path d="M11.071.653a.457.457 0 00-.304-.102.493.493 0 00-.381.178l-6.19 7.636-2.011-2.095a.463.463 0 00-.659.003.423.423 0 00.003.625l2.388 2.489a.463.463 0 00.659.004l6.557-8.084a.422.422 0 00-.062-.654z" />
                    <path d="M14.757.653a.457.457 0 00-.305-.102.493.493 0 00-.38.178l-6.19 7.636-1.166-1.214-.463.57 1.577 1.644a.463.463 0 00.66.004l6.556-8.084a.422.422 0 00-.289-.632z" />
                  </svg>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Status Bar */}
      {statusText && (
        <div className="border-t border-[#e0dcd5] bg-[#f0ede6] px-4 py-2">
          <p className="text-center text-xs font-medium text-teal">{statusText}</p>
        </div>
      )}

      {/* Input Bar */}
      <div className="flex items-center gap-2 border-t border-[#e0dcd5] bg-[#f0ede6] px-3 py-2">
        <div className="flex-1 rounded-full bg-white px-4 py-2 text-xs text-muted">
          Bir mesaj yazın...
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#075E54] text-white">
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
