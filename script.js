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

// --- GLOBAL DATA (will be loaded from the page) ---
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
        selectedUnits: [],
    }
};

// --- SPEECH SYNTHESIS CONTROLLER ---
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
    if (!i18n) return key; // Guard against data not being loaded yet
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

// --- RENDERER ---
function render() {
    const appContainer = document.getElementById('app-container');
    if (!appContainer) return;

    // Apply theme and language direction
    document.documentElement.lang = state.language;
    document.documentElement.dir = state.language === 'ar' ? 'rtl' : 'ltr';
    if (state.theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    let pageContent;
    switch(state.currentPage) {
        case 'standards':
            pageContent = renderStandardsPage();
            break;
        case 'standard-detail':
            pageContent = renderStandardDetailPage();
            break;
        case 'practice':
            pageContent = renderPracticePage();
            break;
        case 'mcq':
            pageContent = renderMCQPage();
            break;
        case 'results':
            pageContent = renderResultsPage();
            break;
        default:
            pageContent = renderHomePage();
    }

    appContainer.innerHTML = `
        ${renderNavbar()}
        <main class="flex-grow">${pageContent}</main>
        ${renderFooter()}
        ${state.showLoginModal ? renderLoginModal() : ''}
        ${state.showRegisterModal ? renderRegisterModal() : ''}
    `;
    addEventListeners();
    speechController._updateUI(); // Ensure controls are correct after any render
}

// --- COMPONENTS: NAVBAR ---
function renderNavbar() {
    const navItems = ['about', 'standards', 'practice', 'certifications', 'faq', 'contact'];
    return `
    <header class="bg-surface sticky top-0 z-40 shadow-md">
      <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" data-page="home" class="text-2xl font-bold text-primary dark:text-secondary">IFRS<span class="font-light">Academy</span></a>
        <div class="hidden lg:flex items-center space-x-8">
          ${navItems.map(item => `<a href="#" data-page="${item}" class="text-text-secondary hover:text-primary dark:hover:text-secondary transition-colors duration-300">${t(`nav.${item}`)}</a>`).join('')}
        </div>
        <div class="hidden lg:flex items-center space-x-4">
            <button id="theme-toggle-btn" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                ${state.theme === 'light' ? Moon({className: 'h-5 w-5'})[0].outerHTML : Sun({className: 'h-5 w-5'})[0].outerHTML}
            </button>
            <button id="lang-toggle-btn" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 flex items-center gap-1">
                ${Languages({className: 'h-5 w-5'})[0].outerHTML}
                <span>${t('mcq.langToggle')}</span>
            </button>
            ${state.currentUser ? `
                <div class="relative group">
                    <button class="flex items-center space-x-2">
                        <span class="font-semibold">${state.currentUser.name}</span>
                        ${ChevronDown({className: 'h-4 w-4'})[0].outerHTML}
                    </button>
                    <div class="absolute right-0 mt-2 w-48 bg-surface rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <a href="#" data-action="logout" class="block px-4 py-2 text-text-secondary hover:bg-gray-100 dark:hover:bg-gray-700">${t('nav.logout')}</a>
                    </div>
                </div>
            ` : `
                <button data-action="show-login" class="btn-secondary text-sm px-4 py-2">${t('nav.login')}</button>
                <button data-action="show-register" class="btn-primary text-sm px-4 py-2">${t('nav.register')}</button>
            `}
        </div>
        <div class="lg:hidden">
          <button id="mobile-menu-btn" class="text-text-primary">
            ${Menu({size: 28})[0].outerHTML}
          </button>
        </div>
      </nav>
      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden lg:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          ${navItems.map(item => `<a href="#" data-page="${item}" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700">${t(`nav.${item}`)}</a>`).join('')}
        </div>
        <div class="pt-4 pb-3 border-t border-border-light">
          <div class="flex items-center px-5">
            ${state.currentUser ? `
                <div class="flex-shrink-0">
                    ${User({className: 'h-8 w-8 text-gray-400'})[0].outerHTML}
                </div>
                <div class="ml-3">
                    <div class="text-base font-medium text-text-primary">${state.currentUser.name}</div>
                    <div class="text-sm font-medium text-text-secondary">${state.currentUser.email}</div>
                </div>` 
            : ''}
          </div>
          <div class="mt-3 px-2 space-y-1">
            ${state.currentUser ?
                `<a href="#" data-action="logout" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700">${t('nav.logout')}</a>`
                :
                `<a href="#" data-action="show-login" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700">${t('nav.login')}</a>
                 <a href="#" data-action="show-register" class="block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700">${t('nav.register')}</a>`
            }
          </div>
        </div>
      </div>
    </header>
    `;
}

// --- COMPONENTS: HOME PAGE ---
function renderHomePage() {
    return `
    <!-- Hero Section -->
    <section class="bg-surface dark:bg-surface-dark py-20 lg:py-32">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl lg:text-6xl font-extrabold text-text-primary dark:text-white mb-4 fade-in-up">${t('hero.title')}</h1>
            <p class="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mb-8 fade-in-up" style="animation-delay: 0.2s;">${t('hero.subtitle')}</p>
            <button data-page="practice" class="btn btn-primary text-lg fade-in-up" style="animation-delay: 0.4s;">
                ${t('hero.cta')}
                ${ArrowRight({className: 'ml-2 h-5 w-5'})[0].outerHTML}
            </button>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 lg:py-24">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">${t('features.title')}</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
                    ${BookOpen({className: 'h-12 w-12 text-primary dark:text-secondary mx-auto mb-4'})[0].outerHTML}
                    <h3 class="text-xl font-bold mb-2">${t('features.feature1Title')}</h3>
                    <p class="text-text-secondary">${t('features.feature1Desc')}</p>
                </div>
                <div class="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
                    ${Award({className: 'h-12 w-12 text-primary dark:text-secondary mx-auto mb-4'})[0].outerHTML}
                    <h3 class="text-xl font-bold mb-2">${t('features.feature2Title')}</h3>
                    <p class="text-text-secondary">${t('features.feature2Desc')}</p>
                </div>
                <div class="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 text-center">
                    ${HelpCircle({className: 'h-12 w-12 text-primary dark:text-secondary mx-auto mb-4'})[0].outerHTML}
                    <h3 class="text-xl font-bold mb-2">${t('features.feature3Title')}</h3>
                    <p class="text-text-secondary">${t('features.feature3Desc')}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Certifications Section -->
    <section class="bg-surface dark:bg-surface-dark py-16 lg:py-24">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12">${t('certs.title')}</h2>
            <div class="grid md:grid-cols-3 gap-8">
                 <div class="border border-border-light dark:border-border-dark rounded-2xl p-8 flex flex-col">
                    <h3 class="text-2xl font-bold mb-2">${t('certs.cert1Title')}</h3>
                    <p class="text-text-secondary mb-6 flex-grow">${t('certs.cert1Desc')}</p>
                    <a href="#" class="font-semibold text-primary dark:text-secondary hover:underline">${t('certs.learnMore')}</a>
                </div>
                 <div class="border border-border-light dark:border-border-dark rounded-2xl p-8 flex flex-col">
                    <h3 class="text-2xl font-bold mb-2">${t('certs.cert2Title')}</h3>
                    <p class="text-text-secondary mb-6 flex-grow">${t('certs.cert2Desc')}</p>
                    <a href="#" class="font-semibold text-primary dark:text-secondary hover:underline">${t('certs.learnMore')}</a>
                </div>
                 <div class="border border-border-light dark:border-border-dark rounded-2xl p-8 flex flex-col">
                    <h3 class="text-2xl font-bold mb-2">${t('certs.cert3Title')}</h3>
                    <p class="text-text-secondary mb-6 flex-grow">${t('certs.cert3Desc')}</p>
                    <a href="#" class="font-semibold text-primary dark:text-secondary hover:underline">${t('certs.learnMore')}</a>
                </div>
            </div>
        </div>
    </section>
    `;
}

// --- COMPONENTS: FOOTER ---
function renderFooter() {
    return `
    <footer class="bg-surface dark:bg-surface-dark mt-auto">
        <div class="container mx-auto px-6 py-8">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-lg font-bold mb-4">IFRS Academy</h3>
                    <p class="text-text-secondary text-sm">${t('hero.subtitle')}</p>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">${t('nav.about')}</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('footer.about')}</a></li>
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('footer.contact')}</a></li>
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('footer.careers')}</a></li>
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('footer.blog')}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">${t('nav.certifications')}</h3>
                     <ul class="space-y-2">
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('certs.cert1Title')}</a></li>
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('certs.cert2Title')}</a></li>
                        <li><a href="#" class="text-text-secondary hover:text-primary">${t('certs.cert3Title')}</a></li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                    <p class="text-text-secondary mb-4 text-sm">Stay up to date with the latest news and offers.</p>
                    <form class="flex">
                        <input type="email" placeholder="Enter your email" class="w-full px-4 py-2 rounded-l-lg focus:outline-none">
                        <button class="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary-dark">${t('auth.createAccount')}</button>
                    </form>
                </div>
            </div>
            <div class="mt-8 border-t border-border-light pt-6 text-center text-sm text-text-secondary">
                <p>${t('footer.copyright')}</p>
                <p class="mt-1"><a href="#" class="hover:underline">${t('footer.disclaimer')}</a></p>
            </div>
        </div>
    </footer>
    `;
}

// --- COMPONENTS: MODALS (LOGIN/REGISTER) ---
function renderLoginModal() {
    return `
    <div class="modal-overlay" data-action="close-modal">
        <div class="modal-container" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2 class="text-2xl font-bold">${t('auth.loginTitle')}</h2>
                <button data-action="close-modal" class="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    ${X({size: 28})[0].outerHTML}
                </button>
            </div>
            <div class="modal-body">
                <form id="login-form">
                    <div class="mb-4">
                        <label for="login-email" class="block text-sm font-medium text-text-secondary mb-1">${t('auth.email')}</label>
                        <input type="email" id="login-email" required class="w-full">
                    </div>
                    <div class="mb-6">
                        <label for="login-password" class="block text-sm font-medium text-text-secondary mb-1">${t('auth.password')}</label>
                        <input type="password" id="login-password" required class="w-full">
                    </div>
                    <button type="submit" class="btn btn-primary w-full">${t('nav.login')}</button>
                </form>
                <p class="mt-6 text-center text-sm">
                    ${t('auth.noAccount')} <a href="#" data-action="show-register" class="font-medium text-primary dark:text-secondary hover:underline">${t('nav.register')}</a>
                </p>
            </div>
        </div>
    </div>
    `;
}

function renderRegisterModal() {
     return `
    <div class="modal-overlay" data-action="close-modal">
        <div class="modal-container" onclick="event.stopPropagation()">
            <div class="modal-header">
                <h2 class="text-2xl font-bold">${t('auth.registerTitle')}</h2>
                <button data-action="close-modal" class="text-gray-400 hover:text-gray-600 dark:hover:text-white">
                    ${X({size: 28})[0].outerHTML}
                </button>
            </div>
            <div class="modal-body">
                <form id="register-form">
                     <div class="mb-4">
                        <label for="register-name" class="block text-sm font-medium text-text-secondary mb-1">${t('auth.name')}</label>
                        <input type="text" id="register-name" required class="w-full">
                    </div>
                    <div class="mb-4">
                        <label for="register-email" class="block text-sm font-medium text-text-secondary mb-1">${t('auth.email')}</label>
                        <input type="email" id="register-email" required class="w-full">
                    </div>
                    <div class="mb-6">
                        <label for="register-password" class="block text-sm font-medium text-text-secondary mb-1">${t('auth.password')}</label>
                        <input type="password" id="register-password" required class="w-full">
                    </div>
                    <button type="submit" class="btn btn-primary w-full">${t('auth.createAccount')}</button>
                </form>
                <p class="mt-6 text-center text-sm">
                    ${t('auth.haveAccount')} <a href="#" data-action="show-login" class="font-medium text-primary dark:text-secondary hover:underline">${t('nav.login')}</a>
                </p>
            </div>
        </div>
    </div>
    `;
}

// --- COMPONENTS: STANDARDS PAGE ---
function renderStandardsPage() {
    const ifrsStandards = standardsInfo.filter(s => s.type === 'IFRS');
    const iasStandards = standardsInfo.filter(s => s.type === 'IAS');

    const renderList = (standards) => standards.map(s => `
        <a href="#" data-page="standard-detail" data-id="${s.id}" class="block bg-surface dark:bg-surface-dark p-6 rounded-xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-bold text-lg text-primary dark:text-secondary">${s.id}</h3>
                    <p class="text-text-primary mt-1">${s.title[state.language]}</p>
                </div>
                <span class="text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full">${s.mcqs} ${t('mcq.mcqs')}</span>
            </div>
        </a>
    `).join('');

    return `
    <div class="container mx-auto px-6 py-12">
        <h1 class="text-4xl font-bold mb-2">${t('standards.title')}</h1>
        <p class="text-lg text-text-secondary mb-10">${t('standards.subtitle')}</p>

        <div class="grid lg:grid-cols-2 gap-12">
            <div>
                <h2 class="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">IFRS Standards</h2>
                <div class="space-y-4">
                    ${renderList(ifrsStandards)}
                </div>
            </div>
            <div>
                <h2 class="text-2xl font-bold mb-6 border-b-2 border-primary pb-2">IAS Standards</h2>
                <div class="space-y-4">
                    ${renderList(iasStandards)}
                </div>
            </div>
        </div>
    </div>
    `;
}

// --- COMPONENTS: STANDARD DETAIL PAGE ---
function renderStandardDetailPage() {
    const standard = standardsInfo.find(s => s.id === state.selectedStandardId);
    if (!standard) {
        return `<div class="p-8 text-center">Standard not found.</div>`;
    }
    const explanation = standardsExplanations[standard.id]?.[state.language] || "<p>Explanation not available in this language.</p>";

    return `
    <div class="container mx-auto px-6 py-12">
        <button data-page="standards" class="flex items-center text-primary dark:text-secondary font-semibold mb-8">
            ${ChevronLeft({className: 'h-5 w-5'})[0].outerHTML}
            <span>${t('standards.back')}</span>
        </button>

        <div class="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-lg">
            <div class="flex justify-between items-center mb-4">
                <h1 class="text-3xl font-bold">${standard.id}: ${standard.title[state.language]}</h1>
                <a href="${standard.link}" target="_blank" class="btn btn-secondary text-sm px-4 py-2">
                    ${t('standards.viewOfficial')}
                    ${ExternalLink({className: 'ml-2 h-4 w-4'})[0].outerHTML}
                </a>
            </div>
            
            <div class="border-t border-border-light my-6"></div>
            
            ${renderReadAloudControls('standard')}

            <div id="standard-explanation-content" class="prose dark:prose-invert max-w-none mt-6">
                ${explanation}
            </div>
        </div>
    </div>
    `;
}

// --- COMPONENTS: READ ALOUD CONTROLS ---
function renderReadAloudControls(contextId) {
    const langPrefix = state.language === 'ar' ? 'ar' : 'en';
    const voices = state.speech.availableVoices.filter(v => v.lang.startsWith(langPrefix));

    return `
    <div data-context="${contextId}" class="read-aloud-controls bg-gray-100 dark:bg-gray-800 p-3 rounded-lg flex items-center gap-4 flex-wrap">
        <button title="${t('standards.play')}" class="toggle-play-btn p-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors">
            ${PlayIcon({size: 20})[0].outerHTML}
        </button>
        <button title="${t('standards.restart')}" class="restart-reading-btn p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" disabled>
            ${RewindIcon({size: 20})[0].outerHTML}
        </button>
        <button title="${t('standards.stop')}" class="stop-reading-btn p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors" disabled>
            ${StopCircle({size: 20})[0].outerHTML}
        </button>
        <div class="flex items-center gap-2">
            <span class="text-sm font-medium">${t('standards.voice')}:</span>
            <select class="voice-select bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 text-sm">
                ${voices.map(v => `<option value="${v.voiceURI}" ${v.voiceURI === state.speech.selectedVoiceURI ? 'selected' : ''}>${v.name}</option>`).join('')}
            </select>
        </div>
        <div class="flex items-center gap-2">
            <button class="rate-down-btn p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">${MinusCircle({size: 18})[0].outerHTML}</button>
            <span class="rate-display text-sm font-mono w-12 text-center">${state.speech.rate.toFixed(2)}x</span>
            <button class="rate-up-btn p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">${PlusCircle({size: 18})[0].outerHTML}</button>
        </div>
    </div>
    `;
}

// --- COMPONENTS: PRACTICE PAGE ---
function renderPracticePage() {
    const totalMcqs = standardsInfo.reduce((acc, s) => acc + s.mcqs, 0);
    const selectedMcqCount = standardsInfo
        .filter(s => state.practiceTestConfig.selectedUnits.includes(s.id))
        .reduce((acc, s) => acc + s.mcqs, 0);
    
    const mcqCount = state.practiceTestConfig.mcqCount === 0 ? selectedMcqCount : Math.min(state.practiceTestConfig.mcqCount, selectedMcqCount);

    return `
    <div class="container mx-auto px-6 py-12 max-w-4xl">
        <h1 class="text-4xl font-bold mb-8 text-center">${t('practice.title')}</h1>
        <div class="bg-surface dark:bg-surface-dark p-8 rounded-2xl shadow-lg">
            
            <!-- Scoring Mode -->
            <div class="mb-8">
                <h2 class="text-xl font-semibold mb-4">${t('practice.scoringMode')}</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label class="p-6 border rounded-lg cursor-pointer transition-all ${state.practiceTestConfig.scoringMode === 'exam' ? 'border-primary ring-2 ring-primary' : 'border-border-light'}">
                        <input type="radio" name="scoringMode" value="exam" class="hidden" ${state.practiceTestConfig.scoringMode === 'exam' ? 'checked' : ''}>
                        <h3 class="font-bold text-lg">${t('practice.exam')}</h3>
                        <p class="text-text-secondary text-sm">${t('practice.examDesc')}</p>
                    </label>
                    <label class="p-6 border rounded-lg cursor-pointer transition-all ${state.practiceTestConfig.scoringMode === 'practice' ? 'border-primary ring-2 ring-primary' : 'border-border-light'}">
                        <input type="radio" name="scoringMode" value="practice" class="hidden" ${state.practiceTestConfig.scoringMode === 'practice' ? 'checked' : ''}>
                        <h3 class="font-bold text-lg">${t('practice.practice')}</h3>
                        <p class="text-text-secondary text-sm">${t('practice.practiceDesc')}</p>
                    </label>
                </div>
            </div>

            <!-- Units Selection -->
            <div class="mb-8">
                <div class="flex justify-between items-center mb-4">
                    <h2 class="text-xl font-semibold">${t('practice.units')}</h2>
                    <button id="toggle-all-units" class="text-sm font-medium text-primary dark:text-secondary hover:underline">${t('practice.allUnits')}</button>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    ${standardsInfo.map(s => `
                        <label class="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                            <input type="checkbox" data-unit-id="${s.id}" class="unit-checkbox h-4 w-4 rounded text-primary focus:ring-primary" ${state.practiceTestConfig.selectedUnits.includes(s.id) ? 'checked' : ''}>
                            <span class="text-sm">${s.id} (${s.mcqs})</span>
                        </label>
                    `).join('')}
                </div>
            </div>

            <!-- Number of Questions -->
            <div class="mb-8">
                <h2 class="text-xl font-semibold mb-2">${t('practice.questionType')}</h2>
                <div class="flex items-center gap-4">
                    <input type="range" id="mcq-count-slider" min="0" max="${totalMcqs}" value="${state.practiceTestConfig.mcqCount}" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
                    <span class="font-bold text-lg w-24 text-center">${mcqCount} / ${selectedMcqCount}</span>
                </div>
            </div>

            <!-- Start Test -->
            <div class="text-center">
                <button id="start-test-btn" class="btn btn-primary text-lg w-full md:w-auto" ${selectedMcqCount === 0 ? 'disabled' : ''}>
                    ${t('practice.startTest')}
                </button>
            </div>
        </div>
    </div>
    `;
}

// --- COMPONENTS: MCQ PAGE ---
function renderMCQPage() {
    if (state.mcq.activeQuestions.length === 0) {
        return `
        <div class="container mx-auto px-6 py-12 text-center">
            <h1 class="text-3xl font-bold mb-4">${t('mcq.noQuestions')}</h1>
            <p class="text-text-secondary mb-8">${t('mcq.noQuestionsDesc')}</p>
            <button data-page="practice" class="btn btn-primary">${t('mcq.backToSetup')}</button>
        </div>
        `;
    }

    const question = state.mcq.activeQuestions[state.mcq.currentIndex];
    const userAnswer = state.mcq.userAnswers[question.id];
    const isAnswered = userAnswer !== undefined;
    const isPracticeMode = state.practiceTestConfig.scoringMode === 'practice';
    const showExplanation = isAnswered && isPracticeMode;

    const getOptionClass = (option) => {
        if (!isAnswered || !isPracticeMode) return 'bg-surface dark:bg-surface-dark hover:bg-gray-100 dark:hover:bg-gray-700';
        if (option === question.correctAnswer) return 'bg-correct-bg border-correct text-correct-text';
        if (option === userAnswer && option !== question.correctAnswer) return 'bg-incorrect-bg border-incorrect text-incorrect-text';
        return 'bg-surface dark:bg-surface-dark';
    };

    const getTimerColor = () => {
        if (state.mcq.timeElapsed > 120) return 'text-red-500';
        if (state.mcq.timeElapsed > 90) return 'text-yellow-500';
        return 'text-text-secondary';
    };
    
    const minutes = Math.floor(state.mcq.timeElapsed / 60).toString().padStart(2, '0');
    const seconds = (state.mcq.timeElapsed % 60).toString().padStart(2, '0');

    return `
    <div class="flex flex-col h-screen">
        <!-- MCQ Header -->
        <header class="bg-surface dark:bg-surface-dark shadow-md p-3 flex justify-between items-center shrink-0">
            <h1 class="text-lg font-bold text-primary dark:text-secondary">
                ${t('mcq.mcqs')} <span class="text-text-secondary font-normal">(${state.mcq.currentIndex + 1} / ${state.mcq.activeQuestions.length})</span>
            </h1>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2 ${getTimerColor()}">
                    <span class="font-mono text-lg">${minutes}:${seconds}</span>
                    <span class="text-xs">${t('mcq.questionTime')}</span>
                </div>
                <button data-action="end-session" class="btn btn-secondary text-sm px-4 py-2">${t('mcq.endSession')}</button>
            </div>
        </header>

        <!-- Main Content -->
        <div class="flex-grow flex overflow-hidden">
            <!-- Question Panel -->
            <div class="w-full lg:w-2/3 flex flex-col p-4 md:p-8 overflow-y-auto">
                <div class="flex-grow">
                    <div class="flex justify-between items-center mb-4">
                        <span class="text-sm font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-full">${quest