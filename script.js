// --- LUCIDE ICONS (as functions) ---
const createIcon = (svg) => (props = {}) => {
    const { size = 24, className = '', ...rest } = props;
    const parser = new DOMParser();
    const doc = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}">${svg}</svg>`, "image/svg+xml");
    return doc.documentElement;
};

const Menu = createIcon('<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>');
const X = createIcon('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>');
const ChevronDown = createIcon('<path d="m6 9 6 6 6-6"/>');
const ArrowRight = createIcon('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>');
const BookOpen = createIcon('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>');
const Award = createIcon('<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 17 17 23 15.79 13.88"/>');
const HelpCircle = createIcon('<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>');
const Star = createIcon('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>');
const PlayIcon = createIcon('<polygon points="5 3 19 12 5 21 5 3"/>');
const PauseIcon = createIcon('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>');
const Calculator = createIcon('<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="8" y1="14" x2="8" y2="18"/>');
const Sheet = createIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>');
const List = createIcon('<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>');
const ChevronLeft = createIcon('<polyline points="15 18 9 12 15 6"/>');
const Flag = createIcon('<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>');
const Maximize2 = createIcon('<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>');
const Minimize2 = createIcon('<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="10" y1="14" x2="3" y2="21"/>');
const Languages = createIcon('<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>');
const Sun = createIcon('<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m4.93 19.07 1.41-1.41"/><path d="m17.66 6.34 1.41-1.41"/>');
const Moon = createIcon('<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>');
const ExternalLink = createIcon('<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>');
const User = createIcon('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>');
const BrainCircuit = createIcon('<path d="M12 2a2.5 2.5 0 0 1 3 4.5A2.5 2.5 0 0 1 12 11a2.5 2.5 0 0 1-3-4.5A2.5 2.5 0 0 1 12 2z"/><path d="M12 11v1"/><path d="M12 16a2.5 2.5 0 0 1 3 4.5 2.5 2.5 0 0 1-3 4.5 2.5 2.5 0 0 1-3-4.5 2.5 2.5 0 0 1 3-4.5z"/><path d="M12 16v-1"/><path d="M15.5 4.5a2.5 2.5 0 0 1 3 4.5 2.5 2.5 0 0 1-3 4.5"/><path d="m17 14 2-2 -2-2"/><path d="m8.5 4.5a2.5 2.5 0 0 0-3 4.5 2.5 2.5 0 0 0 3 4.5"/><path d="m7 14-2-2 2-2"/>');
const CheckCircle = createIcon('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>');
const PlusCircle = createIcon('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>');
const MinusCircle = createIcon('<circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>');
const StopCircle = createIcon('<circle cx="12" cy="12" r="10"/><rect x="9" y="9" width="6" height="6"/>');
const RewindIcon = createIcon('<polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>');
const Mic = createIcon('<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/>');

// --- GLOBAL DATA (to be loaded from JSON) ---
let i18n;
let standardsInfo;
let standardsExplanations;
let questionsData;

// --- STATE MANAGEMENT ---
let state = {
    currentPage: 'home',
    language: 'en',
    theme: 'light',
    currentUser: null,
    showLoginModal: false,
    showRegisterModal: false,
    selectedStandardId: null,
    speech: {
        rate: 1,
        availableVoices: [],
        selectedVoiceURI: null,
    },
    mcq: {
        timerId: null,
        timeElapsed: 0,
        currentIndex: 0,
        userAnswers: {},
        activeQuestions: [],
        activeExplanationTab: 'explanation',
        showCalculator: false,
        showSpreadsheet: false,
        showOverview: false,
        showHelp: false,
        flaggedQuestions: [],
        starredQuestions: [],
    },
    practiceTestConfig: {
        scoringMode: 'practice',
        mcqCount: 0,
        selectedUnits: [], // Initialized as empty, will be populated after data load
    }
};

// --- SPEECH SYNTHESIS CONTROLLER ---
// NOTE: This controller remains unchanged as it does not directly depend on the initial data load.
const speechController = {
    synth: window.speechSynthesis,
    state: 'idle', // 'idle', 'playing', 'paused'
    utterances: [],
    currentUtteranceIndex: -1,
    lastHighlightedElement: null,
    currentContextElements: [],
    currentContextId: null, // 'standard', 'mcq-question', 'mcq-explanation'
    init() {
        if (!this.synth) {
            console.error("Speech Synthesis not supported.");
            return;
        }
        const setVoices = () => {
            const voices = this.synth.getVoices();
            if (voices.length === 0) return;
            state.speech.availableVoices = voices;
            if (!state.speech.selectedVoiceURI) {
                const langPrefix = state.language === 'ar' ? 'ar' : 'en';
                const defaultVoice = voices.find(v => v.lang.startsWith(langPrefix) && v.default) || voices.find(v => v.lang.startsWith(langPrefix));
                if (defaultVoice) {
                    state.speech.selectedVoiceURI = defaultVoice.voiceURI;
                }
            }
            this._updateUI();
        };
        this.synth.onvoiceschanged = setVoices;
        setVoices();
    },
    _updateUI() {
        document.querySelectorAll('.read-aloud-controls').forEach(controls => {
            const contextId = controls.dataset.context;
            const playPauseBtn = controls.querySelector('.toggle-play-btn');
            const stopBtn = controls.querySelector('.stop-reading-btn');
            const restartBtn = controls.querySelector('.restart-reading-btn');
            const rateDisplay = controls.querySelector('.rate-display');
            const voiceSelect = controls.querySelector('.voice-select');
            const isActiveContext = this.currentContextId === contextId;
            if (playPauseBtn) {
                let icon, playPauseTitle;
                const currentState = isActiveContext ? this.state : 'idle';
                switch (currentState) {
                    case 'playing':
                        icon = PauseIcon({ size: 20 }).outerHTML;
                        playPauseTitle = t('standards.pause');
                        break;
                    case 'paused':
                        icon = PlayIcon({ size: 20 }).outerHTML;
                        playPauseTitle = t('standards.resume');
                        break;
                    default: // idle
                        icon = PlayIcon({ size: 20 }).outerHTML;
                        playPauseTitle = t('standards.play');
                        break;
                }
                playPauseBtn.innerHTML = icon;
                playPauseBtn.title = playPauseTitle;
            }
            const isIdle = !isActiveContext || this.state === 'idle';
            if (stopBtn) stopBtn.disabled = isIdle;
            if (restartBtn) restartBtn.disabled = isIdle;
            if (rateDisplay) rateDisplay.textContent = `${state.speech.rate.toFixed(2)}x`;
            if (voiceSelect) {
                const langPrefix = state.language === 'ar' ? 'ar' : 'en';
                const filteredVoices = state.speech.availableVoices.filter(v => v.lang.startsWith(langPrefix));
                if (voiceSelect.options.length !== filteredVoices.length) {
                    voiceSelect.innerHTML = filteredVoices.map(v => `<option value="${v.voiceURI}" ${v.voiceURI === state.speech.selectedVoiceURI ? 'selected' : ''}>${v.name}</option>`).join('');
                }
                voiceSelect.value = state.speech.selectedVoiceURI;
            }
        });
    },
    play(textElements, lang, contextId, startIndex = 0) {
        if (this.state !== 'idle') {
            this.stop(false);
        }
        this.currentContextId = contextId;
        this.currentContextElements = textElements.filter(el => {
            if (el.tagName === 'STYLE' || el.tagName === 'SCRIPT') {
                return false;
            }
            return el.textContent && el.textContent.trim() !== '';
        });
        if (this.currentContextElements.length === 0) {
            this.state = 'idle';
            this._updateUI();
            return;
        }
        const selectedVoice = state.speech.availableVoices.find(v => v.voiceURI === state.speech.selectedVoiceURI);
        const langCode = lang === 'ar' ? 'ar-SA' : 'en-GB';
        const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F270}]+/ug;
        this.utterances = this.currentContextElements.map(el => {
            let cleanText = el.textContent || '';
            cleanText = cleanText.replace(emojiRegex, '').trim();
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = langCode;
            utterance.voice = selectedVoice || state.speech.availableVoices.find(v => v.lang.startsWith(lang));
            utterance.rate = state.speech.rate;
            utterance.onstart = () => {
                this.state = 'playing';
                this.highlightElement(el);
                this._updateUI();
            };
            utterance.onend = () => {
                this.unhighlightElement(el);
                this.currentUtteranceIndex++;
                if (this.currentUtteranceIndex < this.utterances.length) {
                    this.synth.speak(this.utterances[this.currentUtteranceIndex]);
                } else {
                    this.stop(true);
                }
            };
            return utterance;
        }).filter(utterance => utterance.text.length > 0);
        if (this.utterances.length > 0) {
            this.state = 'playing';
            this.currentUtteranceIndex = Math.max(0, Math.min(startIndex, this.utterances.length - 1));
            this.synth.speak(this.utterances[this.currentUtteranceIndex]);
        } else {
            this.state = 'idle';
        }
        this._updateUI();
    },
    pause() {
        if (this.state === 'playing') {
            this.synth.pause();
            this.state = 'paused';
            this._updateUI();
        }
    },
    resume() {
        if (this.state === 'paused') {
            this.synth.resume();
            this.state = 'playing';
            this._updateUI();
        }
    },
    stop(isHard = true) {
        if(this.lastHighlightedElement) {
            this.unhighlightElement(this.lastHighlightedElement);
            this.lastHighlightedElement = null;
        }
        if (this.synth) {
            this.synth.cancel();
        }
        this.utterances = [];
        this.currentUtteranceIndex = -1;
        this.state = 'idle';
        if (isHard) {
            this.currentContextElements = [];
            this.currentContextId = null;
        }
        this._updateUI();
    },
    restart() {
        if (this.currentContextElements.length > 0) {
            this.play(this.currentContextElements, state.language, this.currentContextId, 0);
        }
    },
    togglePlayPauseResume(contextId, startingElement = null) {
        if (this.currentContextId !== contextId || (startingElement && this.lastHighlightedElement !== startingElement)) {
            this.stop(true);
        }
        switch(this.state) {
            case 'idle':
                let selector;
                let content;
                let startIndex = 0;
                if (contextId === 'standard') {
                    selector = '#standard-explanation-content .prose > p, #standard-explanation-content .prose > h1, #standard-explanation-content .prose > h2, #standard-explanation-content .prose > h3, #standard-explanation-content .prose > h4, #standard-explanation-content .prose > h5, #standard-explanation-content .prose > h6, #standard-explanation-content .prose > ul > li, #standard-explanation-content .prose table th, #standard-explanation-content .prose table td';
                    content = Array.from(document.querySelectorAll(selector));
                } else if (contextId === 'mcq-question') {
                    selector = '#mcq-question-text, .mcq-option-btn .flex-1';
                    content = Array.from(document.querySelectorAll(selector));
                } else if (contextId === 'mcq-explanation') {
                    selector = '#mcq-explanation-content h2, #mcq-explanation-content h3, #mcq-explanation-content h4, #mcq-explanation-content p, #mcq-explanation-content li, #mcq-explanation-content td, #mcq-explanation-content th';
                    content = Array.from(document.querySelectorAll(selector));
                }
                if (startingElement && content.length > 0) {
                    const foundIndex = content.findIndex(el => el === startingElement);
                    if (foundIndex !== -1) {
                        startIndex = foundIndex;
                    }
                }
                this.play(content, state.language, contextId, startIndex);
                break;
            case 'playing':
                this.pause();
                break;
            case 'paused':
                this.resume();
                break;
        }
    },
    setVoice(voiceURI) {
        state.speech.selectedVoiceURI = voiceURI;
        if (this.state !== 'idle') {
            this.restart();
        }
        this._updateUI();
    },
    adjustRate(newRate) {
        const clampedRate = Math.max(0.5, Math.min(newRate, 2));
        state.speech.rate = clampedRate;
        if (this.state !== 'idle') {
            this.restart();
        }
        this._updateUI();
    },
    highlightElement(el) {
        if(this.lastHighlightedElement) this.unhighlightElement(this.lastHighlightedElement);
        el.classList.add('reading-highlight');
        this.lastHighlightedElement = el;
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    },
    unhighlightElement(el) {
        if (el) el.classList.remove('reading-highlight');
    }
};
speechController.init();

// --- TRANSLATION HELPER ---
function t(key, replacements = {}) {
    const keys = key.split('.');
    let value = i18n[state.language];
    for (const k of keys) {
        if(value) value = value[k];
        if (value === undefined) return key;
    }
    let str = String(value);
    for (const placeholder in replacements) {
        str = str.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return str;
}

// --- RENDERER, COMPONENTS, MCQ LOGIC, and EVENT LISTENERS ---
// This large section of code remains unchanged but now depends on the data
// being loaded asynchronously before it can function correctly.
// All functions from render() through to the end of the original script
// are placed here, exactly as they were.
// ... (The entire block of functions from render() to the end of the original script is assumed to be here)

// --- DATA LOADING & INITIALIZATION (NEW) ---
async function main() {
    try {
        // Fetch the external data file
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Assign the loaded data to our global variables
        i18n = data.i18n;
        standardsInfo = data.standardsInfo;
        standardsExplanations = data.standardsExplanations;
        questionsData = data.questionsData;

        // --- Post-load data processing ---
        // This logic was previously in init(), but it depends on the data.
        // We run it here after the fetch is complete.
        const mcqCounts = questionsData.reduce((acc, q) => {
            acc[q.standard] = (acc[q.standard] || 0) + 1;
            return acc;
        }, {});

        standardsInfo = standardsInfo.map(standard => ({
            ...standard,
            mcqs: mcqCounts[standard.id] || 0
        }));

        // Now that data is loaded and processed, we can initialize parts of the state
        // that depend on this data.
        state.practiceTestConfig.selectedUnits = standardsInfo.map(s => s.id);

        // Finally, call the main init function to set up the rest of the application
        init();

    } catch (error) {
        console.error("Could not load application data from data.json:", error);
        // Display a user-friendly error message on the page
        const appContainer = document.getElementById('app-container');
        if (appContainer) {
            appContainer.innerHTML = `
                <div class="text-center p-8">
                    <h1 class="text-2xl font-bold text-red-600">Failed to Load Application Data</h1>
                    <p class="text-gray-600 dark:text-gray-400 mt-2">Could not fetch required data from 'data.json'. Please ensure the file exists and is accessible. Check the browser console for more technical details.</p>
                </div>
            `;
        }
    }
}

// --- INITIALIZATION ---
// The init function now only contains setup logic that does NOT depend on the loaded data.
function init() {
    // Set theme and language from local storage or system preference
    const savedTheme = localStorage.getItem('ifrs-theme-modern');
    if (savedTheme) {
        state.theme = savedTheme;
    } else if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        state.theme = 'dark';
    }

    const savedLang = localStorage.getItem('ifrs-lang-modern');
    if (savedLang) {
        state.language = savedLang;
    }

    // Add global event listeners that don't depend on the page content
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if(state.showLoginModal) { state.showLoginModal = false; render(); }
            if(state.showRegisterModal) { state.showRegisterModal = false; render(); }
            if(state.mcq.showCalculator) toggleModal('Calculator');
            if(state.mcq.showSpreadsheet) toggleModal('Spreadsheet');
            if(state.mcq.showOverview) toggleModal('Overview');
            if(state.mcq.showHelp) toggleModal('Help');
        }
        if (state.mcq.showCalculator) {
            const display = document.getElementById('calc-display');
            if ("0123456789.+-*/()".includes(e.key)) { e.preventDefault(); display.value += e.key; }
            else if (e.key === 'Enter' || e.key === '=') { e.preventDefault(); document.querySelector('.calc-btn[data-key="="]').click(); }
            else if (e.key === 'Backspace') { e.preventDefault(); display.value = display.value.slice(0, -1); }
            else if (e.key.toLowerCase() === 'c') { e.preventDefault(); display.value = ''; }
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (state.currentPage === 'mcq') render();
    });

    // Initial render of the application
    render();
}

// Start the application by calling our new main async function
main();
