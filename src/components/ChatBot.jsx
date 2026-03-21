import { useState, useRef, useEffect } from "react";
import { TbMessageChatbot } from "react-icons/tb";
import { HiMiniArrowsPointingOut, HiMiniArrowsPointingIn, HiMiniXMark } from "react-icons/hi2";
import { IoSend } from "react-icons/io5";

const VERCEL_URL = "https://chacha-ai-function.vercel.app/api/chat";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handle = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);
  return isMobile;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi there! 👋 I'm Dev. Chacha's AI Assistant. Ask me anything about his skills, projects, or services — I'm here to help!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(VERCEL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Sorry, something went wrong. Please try again! 🙏" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // Responsive sizes
  const getWindowStyle = () => {
    if (isMobile) {
      return {
        position: "fixed",
        bottom: "0",
        left: "0",
        right: "0",
        width: "100%",
        height: "85vh",
        borderRadius: "20px 20px 0 0",
        zIndex: 9998,
      };
    }
    if (isMaximized) {
      return {
        position: "fixed",
        bottom: "0",
        right: "0",
        width: "50vw",
        height: "100vh",
        borderRadius: "20px 0 0 20px",
        zIndex: 9998,
      };
    }
    return {
      position: "fixed",
      bottom: "90px",
      right: "120px",
      width: "420px",
      height: "580px",
      borderRadius: "20px",
      zIndex: 9998,
    };
  };

  const getHeaderRadius = () => {
    if (isMobile) return "20px 20px 0 0";
    if (isMaximized) return "20px 0 0 0";
    return "20px 20px 0 0";
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          ...getWindowStyle(),
          border: "1px solid rgba(108,99,255,0.4)",
          background: "#0f0f1a",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}>

          {/* Header */}
          <div style={{
            padding: "14px 16px",
            background: "linear-gradient(135deg, #6c63ff, #a855f7)",
            borderRadius: getHeaderRadius(),
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <TbMessageChatbot size={20} color="white" />
              </div>
              <div>
                <div style={{ color: "white", fontWeight: "700", fontSize: "14px", lineHeight: 1.2 }}>
                  Dev. Chacha AI
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "11px" }}>
                  ● Online — Ask me anything
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "6px" }}>
              {/* Maximize button — desktop only */}
              {!isMobile && (
                <button
                  onClick={() => setIsMaximized(!isMaximized)}
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "none", borderRadius: "8px",
                    color: "white", cursor: "pointer",
                    width: "30px", height: "30px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                >
                  {isMaximized
                    ? <HiMiniArrowsPointingIn size={16} />
                    : <HiMiniArrowsPointingOut size={16} />
                  }
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: "rgba(255,255,255,0.15)",
                  border: "none", borderRadius: "8px",
                  color: "white", cursor: "pointer",
                  width: "30px", height: "30px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.25)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
              >
                <HiMiniXMark size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            scrollbarWidth: "thin",
            scrollbarColor: "#6c63ff33 transparent",
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.role === "user" ? "flex-end" : "flex-start",
                gap: "4px",
              }}>
                <div style={{
                  fontSize: "10px",
                  color: "rgba(255,255,255,0.35)",
                  paddingLeft: msg.role === "user" ? "0" : "4px",
                  paddingRight: msg.role === "user" ? "4px" : "0",
                }}>
                  {msg.role === "user" ? "You" : "Dev. Chacha AI"}
                </div>
                <div style={{
                  background: msg.role === "user"
                    ? "linear-gradient(135deg, #6c63ff, #a855f7)"
                    : "#1e1e32",
                  color: "white",
                  padding: "10px 14px",
                  borderRadius: msg.role === "user"
                    ? "18px 18px 4px 18px"
                    : "18px 18px 18px 4px",
                  maxWidth: "82%",
                  fontSize: "13px",
                  lineHeight: "1.6",
                  boxShadow: msg.role === "user"
                    ? "0 4px 12px rgba(108,99,255,0.3)"
                    : "0 2px 8px rgba(0,0,0,0.3)",
                  whiteSpace: "pre-wrap",
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {loading && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", paddingLeft: "4px" }}>
                  Dev. Chacha AI
                </div>
                <div style={{
                  background: "#1e1e32",
                  padding: "12px 16px",
                  borderRadius: "18px 18px 18px 4px",
                  display: "flex", gap: "5px", alignItems: "center",
                }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: "7px", height: "7px",
                      borderRadius: "50%",
                      background: "#6c63ff",
                      animation: "bounce 1.2s infinite",
                      animationDelay: `${i * 0.2}s`,
                    }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div style={{
              padding: "0 16px 12px",
              display: "flex", flexWrap: "wrap", gap: "6px",
            }}>
              {["What can Chacha build?", "Show me his projects", "How do I hire him?"].map((q) => (
                <button key={q} onClick={() => setInput(q)}
                  style={{
                    background: "rgba(108,99,255,0.15)",
                    border: "1px solid rgba(108,99,255,0.3)",
                    borderRadius: "20px",
                    color: "rgba(255,255,255,0.8)",
                    padding: "6px 14px",
                    fontSize: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(108,99,255,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.background = "rgba(108,99,255,0.15)"}
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: isMobile ? "12px 16px 24px" : "12px 16px",
            borderTop: "1px solid rgba(108,99,255,0.15)",
            display: "flex", gap: "8px", alignItems: "center",
            flexShrink: 0,
          }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything..."
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: "12px",
                border: "1px solid rgba(108,99,255,0.3)",
                background: "#1e1e32",
                color: "white",
                fontSize: "14px",
                outline: "none",
                transition: "border 0.2s",
              }}
              onFocus={e => e.target.style.borderColor = "#6c63ff"}
              onBlur={e => e.target.style.borderColor = "rgba(108,99,255,0.3)"}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                width: "44px", height: "44px",
                borderRadius: "12px",
                background: input.trim() ? "linear-gradient(135deg, #6c63ff, #a855f7)" : "#1e1e32",
                border: "none", color: "white",
                cursor: input.trim() ? "pointer" : "not-allowed",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s",
                flexShrink: 0,
              }}
            >
              <IoSend size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div style={{
        position: "fixed",
        bottom: isMobile ? "16px" : "24px",
        right: isMobile ? "16px" : "120px",
        zIndex: 9999,
      }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            height: isMobile ? "50px" : "54px",
            borderRadius: "27px",
            background: isOpen
              ? "#1e1e32"
              : "linear-gradient(135deg, #ff6b35, #f7c948)",
            border: isOpen ? "1px solid rgba(108,99,255,0.4)" : "none",
            color: isOpen ? "white" : "#1a1a1a",
            cursor: "pointer",
            display: "flex", alignItems: "center",
            gap: "10px",
            padding: "0 20px",
            boxShadow: isOpen
              ? "none"
              : "0 8px 28px rgba(255,107,53,0.55)",
            animation: isOpen ? "none" : "popBounce 2s ease-in-out infinite",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.animation = "none";
            e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
          }}
          onMouseLeave={e => {
            if (!isOpen) e.currentTarget.style.animation = "popBounce 2s ease-in-out infinite";
            e.currentTarget.style.transform = "translateY(0) scale(1)";
          }}
        >
          <TbMessageChatbot size={22} />
          <span style={{ fontSize: "14px", fontWeight: "700", whiteSpace: "nowrap", letterSpacing: "0.3px" }}>
            {isOpen ? "Close Chat" : "Ask AI Assistant"}
          </span>
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
        @keyframes popBounce {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 8px 28px rgba(255,107,53,0.55); }
          50% { transform: translateY(-8px) scale(1.03); box-shadow: 0 16px 40px rgba(255,107,53,0.7); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}