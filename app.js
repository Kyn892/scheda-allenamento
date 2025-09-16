// Dati degli allenamenti
const workoutData = {
  "giorni_allenamento": [
    {
      "id": 1,
      "nome": "Day 1 - Lower 1",
      "descrizione": "Squat focus / catena anteriore + spalle",
      "icona": "🦵",
      "esercizi": [
        {
          "nome": "Warm-up",
          "dettagli": "8-10' (come sopra)",
          "tipo": "riscaldamento"
        },
        {
          "nome": "Pause Back Squat",
          "dettagli": "2s buca - 3×5/3 @ RPE 6-7, tempo 22X1, rest 2'",
          "serie": 3,
          "reps": "5/3",
          "rpe": "6-7",
          "tempo": "22X1",
          "riposo": "2'"
        },
        {
          "nome": "Barbell Back Squat",
          "dettagli": "4×5 @ RPE 7, tempo 31X1, rest 2'",
          "serie": 4,
          "reps": "5",
          "rpe": "7",
          "tempo": "31X1",
          "riposo": "2'"
        },
        {
          "nome": "Bulgarian Split Squat",
          "dettagli": "3×8/8 @ RPE 7-8, tempo 31X1, rest 90\"",
          "serie": 3,
          "reps": "8/8",
          "rpe": "7-8",
          "tempo": "31X1",
          "riposo": "90\""
        },
        {
          "nome": "Leg Extension monopodalica",
          "dettagli": "2×12/15 each @ RPE 8, tempo 21X1, rest 60-90\"",
          "serie": 2,
          "reps": "12/15 each",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-90\""
        },
        {
          "nome": "Standing Calf Raise",
          "dettagli": "3×12/15 @ RPE 8, tempo 21X2, rest 60-90\"",
          "serie": 3,
          "reps": "12/15",
          "rpe": "8",
          "tempo": "21X2",
          "riposo": "60-90\""
        },
        {
          "nome": "Overhead Press (bilanciere)",
          "dettagli": "3×6 @ RPE 7-7.5, tempo 21X1, rest 2'",
          "serie": 3,
          "reps": "6",
          "rpe": "7-7.5",
          "tempo": "21X1",
          "riposo": "2'"
        },
        {
          "nome": "Alzate laterali basso-fusto bilanciere",
          "dettagli": "3×12/15 @ RPE 8, tempo 21X1, rest 60-75\"",
          "serie": 3,
          "reps": "12/15",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-75\""
        },
        {
          "nome": "Face Pull (cavo o elastico)",
          "dettagli": "2×12/15 @ RPE 7-8, tempo 21X1, rest 60\"",
          "serie": 2,
          "reps": "12/15",
          "rpe": "7-8",
          "tempo": "21X1",
          "riposo": "60\""
        },
        {
          "nome": "Core: Plank",
          "dettagli": "3 × 40/50\" (RPE 7)",
          "serie": 3,
          "reps": "40/50\"",
          "rpe": "7",
          "tipo": "tempo"
        },
        {
          "nome": "Core: Hollow Hold",
          "dettagli": "3 × 20/25\" (RPE7)",
          "serie": 3,
          "reps": "20/25\"",
          "rpe": "7",
          "tipo": "tempo"
        }
      ]
    },
    {
      "id": 2,
      "nome": "Day 2 - Upper 1",
      "descrizione": "Spinta + Braccia",
      "icona": "💪",
      "esercizi": [
        {
          "nome": "Warm-up",
          "dettagli": "8-10' (spalle/scapole) + ramp-up panca",
          "tipo": "riscaldamento"
        },
        {
          "nome": "Bench Press (pausa 1s al petto)",
          "dettagli": "5×5 @ RPE 7, tempo 21X1, rest 2'",
          "serie": 5,
          "reps": "5",
          "rpe": "7",
          "tempo": "21X1",
          "riposo": "2'"
        },
        {
          "nome": "Bench Press inclinata - manubri",
          "dettagli": "3×6/8 @ RPE 6-7, tempo 21X1, rest 2'",
          "serie": 3,
          "reps": "6/8",
          "rpe": "6-7",
          "tempo": "21X1",
          "riposo": "2'"
        },
        {
          "nome": "Dip Corna",
          "dettagli": "3 × 8/10 @ RPE 8, tempo 21X1, rest 60-90\"",
          "serie": 3,
          "reps": "8/10",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-90\""
        },
        {
          "nome": "Pushdown cavo",
          "dettagli": "3×10-12 @ RPE 8, tempo 21X1, rest 60-75\"",
          "serie": 3,
          "reps": "10-12",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-75\""
        },
        {
          "nome": "Curl Bilanciere EZ",
          "dettagli": "3×6/8 @ RPE 8, tempo 21X1, rest 60-75\"",
          "serie": 3,
          "reps": "6/8",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-75\""
        },
        {
          "nome": "Curl Hammer manubrio singolo",
          "dettagli": "3 × 10/12 each @ RPE 8, tempo 21X1, rest 60-75\"",
          "serie": 3,
          "reps": "10/12 each",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-75\""
        },
        {
          "nome": "Core: Push Press",
          "dettagli": "3×12/12 @RPE 7",
          "serie": 3,
          "reps": "12/12",
          "rpe": "7"
        },
        {
          "nome": "Core: Lateral Plank Raises",
          "dettagli": "2 × 12/12",
          "serie": 2,
          "reps": "12/12"
        }
      ]
    },
    {
      "id": 3,
      "nome": "Day 3 - Lower",
      "descrizione": "Deadlift - posterior chain focus + dorso",
      "icona": "🏋️",
      "esercizi": [
        {
          "nome": "Warm-up",
          "dettagli": "8-10' (anca/coscia posteriore) + ramp-up stacco",
          "tipo": "riscaldamento"
        },
        {
          "nome": "Deadlift (concentrico)",
          "dettagli": "4×4 @ RPE 6-7, Tempo 31X1 (eccentrica controllata), rest 2'",
          "serie": 4,
          "reps": "4",
          "rpe": "6-7",
          "tempo": "31X1",
          "riposo": "2'"
        },
        {
          "nome": "Romanian Deadlift Split position doppio manubrio",
          "dettagli": "3×8/8 @ RPE 7-8, tempo 31X1, rest 90\"",
          "serie": 3,
          "reps": "8/8",
          "rpe": "7-8",
          "tempo": "31X1",
          "riposo": "90\""
        },
        {
          "nome": "Hip Thrust (bilanciere preferibilmente)",
          "dettagli": "3×10 @ RPE 8, tempo 21X2, rest 90\"",
          "serie": 3,
          "reps": "10",
          "rpe": "8",
          "tempo": "21X2",
          "riposo": "90\""
        },
        {
          "nome": "Leg Curl (sdraiato)",
          "dettagli": "3×12/15 @ RPE 8, tempo 21X1, rest 60-90\"",
          "serie": 3,
          "reps": "12/15",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-90\""
        },
        {
          "nome": "Rematore manubrio su panca (unilaterale)",
          "dettagli": "3×10/10 @ RPE 8, tempo 21X1, rest 90\"",
          "serie": 3,
          "reps": "10/10",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "90\""
        },
        {
          "nome": "Seated Row (macchina)",
          "dettagli": "3×12 @ RPE 8, tempo 21X1, rest 75\"",
          "serie": 3,
          "reps": "12",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "75\""
        },
        {
          "nome": "Reverse Fly macchina",
          "dettagli": "2×12/15 @ RPE 8, tempo 21X1, rest 60-90\"",
          "serie": 2,
          "reps": "12/15",
          "rpe": "8",
          "tempo": "21X1",
          "riposo": "60-90\""
        },
        {
          "nome": "Carry Farmer Carry Doppio manubrio o kettlebell",
          "dettagli": "4×30m @ RPE 7, rest 60",
          "serie": 4,
          "reps": "30m",
          "rpe": "7",
          "riposo": "60"
        }
      ]
    }
  ]
};

// Classe principale per la gestione dell'app
class WorkoutApp {
    constructor() {
        this.currentWorkout = null;
        this.currentExercise = null;
        this.currentSession = {};
        this.workoutHistory = this.loadWorkoutHistory();
        this.init();
    }

    init() {
        this.bindEvents();
        this.initializePages();
        this.setupBottomMenu();
    }

    bindEvents() {
        // Navigazione home
        document.querySelectorAll('.workout-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const day = parseInt(e.currentTarget.dataset.day);
                this.showWorkoutDay(day);
            });
        });

        // Pulsante back
        document.getElementById('backBtn')?.addEventListener('click', () => {
            this.goBack();
        });

        // Bottom menu
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.dataset.page;
                this.handleMenuNavigation(page);
            });
        });

        // Exercise modal
        document.getElementById('closeExerciseModal')?.addEventListener('click', () => {
            this.hideExerciseModal();
        });

        document.getElementById('addSetBtn')?.addEventListener('click', () => {
            this.addSet();
        });

        // Modal overlay click to close
        document.getElementById('exerciseModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'exerciseModal') {
                this.hideExerciseModal();
            }
        });

        // Confirm modal
        document.getElementById('cancelBtn')?.addEventListener('click', () => {
            this.hideModal();
        });

        document.getElementById('confirmModal')?.addEventListener('click', (e) => {
            if (e.target.id === 'confirmModal') {
                this.hideModal();
            }
        });
    }

    initializePages() {
        // Inizializza le pagine workout
        workoutData.giorni_allenamento.forEach(giorno => {
            this.renderExercisesList(giorno.id, giorno.esercizi);
        });
    }

    renderExercisesList(dayId, exercises) {
        const container = document.getElementById(`exercisesList${dayId}`);
        if (!container) return;

        container.innerHTML = exercises.map((exercise, index) => {
            const exerciseId = `day${dayId}_ex${index}`;
            const sessionData = this.getCurrentSessionData(dayId, exerciseId);
            const completedSets = sessionData ? sessionData.sets.length : 0;
            const targetSets = exercise.serie || 0;
            const progress = targetSets > 0 ? (completedSets / targetSets) * 100 : 0;
            
            let status = 'not-started';
            if (completedSets === targetSets && targetSets > 0) {
                status = 'completed';
            } else if (completedSets > 0) {
                status = 'in-progress';
            }

            let statusText = 'Non iniziato';
            if (status === 'completed') statusText = 'Completato';
            else if (status === 'in-progress') statusText = `${completedSets}/${targetSets} serie`;

            return `
                <div class="exercise-card ${exercise.tipo === 'riscaldamento' ? 'warmup' : ''}" 
                     data-day="${dayId}" data-exercise="${index}">
                    <div class="exercise-header">
                        <div>
                            <div class="exercise-name">${exercise.nome}</div>
                            <div class="exercise-details">${exercise.dettagli}</div>
                        </div>
                        <div class="exercise-status ${status}">${statusText}</div>
                    </div>
                    ${exercise.serie ? `
                        <div class="exercise-progress">
                            <div class="progress-text">${completedSets} di ${targetSets} serie completate</div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${progress}%"></div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
        }).join('');

        // Bind click events
        container.querySelectorAll('.exercise-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const day = parseInt(e.currentTarget.dataset.day);
                const exerciseIndex = parseInt(e.currentTarget.dataset.exercise);
                this.showExerciseModal(day, exerciseIndex);
            });
        });
    }

    showWorkoutDay(day) {
        this.currentWorkout = day;
        this.hideAllPages();
        document.getElementById(`workoutDay${day}`).classList.add('active');
        this.updateHeader(`Day ${day} - ${workoutData.giorni_allenamento[day-1].nome}`);
        document.getElementById('backBtn').classList.remove('hidden');
    }

    showExerciseModal(day, exerciseIndex) {
        const exercise = workoutData.giorni_allenamento[day-1].esercizi[exerciseIndex];
        this.currentExercise = { day, exerciseIndex, exercise };

        document.getElementById('exerciseModalTitle').textContent = exercise.nome;
        document.getElementById('exerciseModalDetails').textContent = exercise.dettagli;

        this.loadCurrentSession(day, `day${day}_ex${exerciseIndex}`);
        this.loadExerciseHistory(exercise.nome);
        
        document.getElementById('exerciseModal').classList.add('show');

        // Clear form
        document.getElementById('setWeight').value = '';
        document.getElementById('setReps').value = '';
        document.getElementById('setNotes').value = '';
    }

    hideExerciseModal() {
        document.getElementById('exerciseModal').classList.remove('show');
        this.currentExercise = null;
        this.refreshCurrentWorkout();
    }

    loadCurrentSession(day, exerciseId) {
        const sessionData = this.getCurrentSessionData(day, exerciseId);
        const container = document.getElementById('currentSets');
        
        if (!sessionData || sessionData.sets.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">Nessuna serie registrata</p>';
            return;
        }

        container.innerHTML = sessionData.sets.map((set, index) => `
            <div class="set-item">
                <div class="set-info">
                    <div class="set-number">${index + 1}</div>
                    <div class="set-values">${set.peso}kg × ${set.reps}</div>
                    ${set.note ? `<div class="set-notes">${set.note}</div>` : ''}
                </div>
                <button class="delete-set" onclick="app.deleteSet(${index})">🗑️</button>
            </div>
        `).join('');
    }

    addSet() {
        const weight = parseFloat(document.getElementById('setWeight').value);
        const reps = parseInt(document.getElementById('setReps').value);
        const notes = document.getElementById('setNotes').value.trim();

        if (!weight || weight < 0) {
            this.showToast('Inserisci un peso valido');
            return;
        }
        if (!reps || reps < 1) {
            this.showToast('Inserisci le ripetizioni');
            return;
        }

        const { day, exerciseIndex } = this.currentExercise;
        const exerciseId = `day${day}_ex${exerciseIndex}`;
        const sessionKey = this.getSessionKey(day);

        if (!this.currentSession[sessionKey]) {
            this.currentSession[sessionKey] = {};
        }
        if (!this.currentSession[sessionKey][exerciseId]) {
            this.currentSession[sessionKey][exerciseId] = { sets: [] };
        }

        const setData = {
            peso: weight,
            reps: reps,
            note: notes,
            timestamp: new Date().toISOString()
        };

        this.currentSession[sessionKey][exerciseId].sets.push(setData);
        this.saveCurrentSession();
        this.loadCurrentSession(day, exerciseId);

        // Clear form
        document.getElementById('setWeight').value = '';
        document.getElementById('setReps').value = '';
        document.getElementById('setNotes').value = '';

        this.showToast(`Serie aggiunta: ${weight}kg × ${reps}`);
    }

    deleteSet(setIndex) {
        const { day, exerciseIndex } = this.currentExercise;
        const exerciseId = `day${day}_ex${exerciseIndex}`;
        const sessionKey = this.getSessionKey(day);

        if (this.currentSession[sessionKey] && 
            this.currentSession[sessionKey][exerciseId] && 
            this.currentSession[sessionKey][exerciseId].sets) {
            
            this.currentSession[sessionKey][exerciseId].sets.splice(setIndex, 1);
            this.saveCurrentSession();
            this.loadCurrentSession(day, exerciseId);
            this.showToast('Serie eliminata');
        }
    }

    loadExerciseHistory(exerciseName) {
        const container = document.getElementById('exerciseHistory');
        const history = this.getExerciseHistory(exerciseName);

        if (history.length === 0) {
            container.innerHTML = '<p style="color: var(--color-text-secondary); font-style: italic;">Nessuna sessione precedente</p>';
            return;
        }

        container.innerHTML = history.slice(-5).map(session => `
            <div class="history-item">
                <div class="history-date">${new Date(session.date).toLocaleDateString('it-IT')}</div>
                <div class="history-sets">
                    ${session.sets.map(set => `
                        <span class="history-set">${set.peso}kg × ${set.reps}</span>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    getCurrentSessionData(day, exerciseId) {
        const sessionKey = this.getSessionKey(day);
        return this.currentSession[sessionKey] && 
               this.currentSession[sessionKey][exerciseId] ? 
               this.currentSession[sessionKey][exerciseId] : null;
    }

    getSessionKey(day) {
        const today = new Date().toDateString();
        return `${today}_day${day}`;
    }

    saveCurrentSession() {
        localStorage.setItem('currentSession', JSON.stringify(this.currentSession));
    }

    loadCurrentSession() {
        const saved = localStorage.getItem('currentSession');
        if (saved) {
            this.currentSession = JSON.parse(saved);
        }
    }

    getExerciseHistory(exerciseName) {
        return this.workoutHistory.filter(entry => entry.exerciseName === exerciseName);
    }

    loadWorkoutHistory() {
        const saved = localStorage.getItem('workoutHistory');
        return saved ? JSON.parse(saved) : [];
    }

    refreshCurrentWorkout() {
        if (this.currentWorkout) {
            const workout = workoutData.giorni_allenamento[this.currentWorkout - 1];
            this.renderExercisesList(this.currentWorkout, workout.esercizi);
        }
    }

    handleMenuNavigation(page) {
        // Update active menu item
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-page="${page}"]`).classList.add('active');

        switch(page) {
            case 'home':
                this.showHomePage();
                break;
            case 'statistics':
                this.showStatisticsPage();
                break;
            case 'profile':
                this.showProfilePage();
                break;
        }
    }

    showHomePage() {
        this.currentWorkout = null;
        this.hideAllPages();
        document.getElementById('homePage').classList.add('active');
        this.updateHeader('Scheda Allenamento');
        document.getElementById('backBtn').classList.add('hidden');
    }

    showStatisticsPage() {
        this.hideAllPages();
        document.getElementById('statisticsPage').classList.add('active');
        this.updateHeader('Statistiche');
        document.getElementById('backBtn').classList.remove('hidden');
        
        // Initialize statistics if not already done
        if (!this.statisticsManager) {
            this.statisticsManager = new StatisticsManager();
        } else {
            this.statisticsManager.loadStatistics();
        }
    }

    showProfilePage() {
        this.hideAllPages();
        document.getElementById('profilePage').classList.add('active');
        this.updateHeader('Profilo');
        document.getElementById('backBtn').classList.remove('hidden');
        
        // Initialize profile if not already done
        if (!this.profileManager) {
            this.profileManager = new ProfileManager();
        }
    }

    hideAllPages() {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
    }

    updateHeader(title) {
        document.getElementById('headerTitle').textContent = title;
    }

    goBack() {
        if (document.getElementById('statisticsPage').classList.contains('active') ||
            document.getElementById('profilePage').classList.contains('active')) {
            this.showHomePage();
            document.querySelector('[data-page="home"]').classList.add('active');
        } else if (this.currentWorkout) {
            this.showHomePage();
            document.querySelector('[data-page="home"]').classList.add('active');
        }
    }

    showToast(message) {
        const toast = document.getElementById('toast');
        document.getElementById('toastMessage').textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    showModal(title, message, onConfirm = null) {
        const modal = document.getElementById('confirmModal');
        document.getElementById('modalTitle').textContent = title;
        document.getElementById('modalMessage').textContent = message;
        
        const confirmBtn = document.getElementById('confirmBtn');
        
        if (onConfirm) {
            confirmBtn.style.display = 'block';
            confirmBtn.onclick = () => {
                onConfirm();
                this.hideModal();
            };
        } else {
            confirmBtn.style.display = 'none';
        }
        
        modal.classList.add('show');
    }

    hideModal() {
        document.getElementById('confirmModal').classList.remove('show');
    }
}

// Statistics Manager
class StatisticsManager {
    constructor() {
        this.charts = {};
        this.init();
    }

    init() {
        this.loadStatistics();
        this.initializeCharts();
        this.generateHeatmap();
        this.loadPersonalRecords();
    }

    loadStatistics() {
        const workoutData = this.getWorkoutData();
        
        const stats = {
            totalSessions: workoutData.length,
            totalVolume: this.calculateTotalVolume(workoutData),
            totalTime: this.calculateTotalTime(workoutData),
            personalRecords: this.getPersonalRecordsCount()
        };

        document.getElementById('totalSessions').textContent = stats.totalSessions;
        document.getElementById('totalVolume').textContent = stats.totalVolume.toLocaleString();
        document.getElementById('totalTime').textContent = Math.round(stats.totalTime);
        document.getElementById('personalRecords').textContent = stats.personalRecords;
    }

    getWorkoutData() {
        const savedData = localStorage.getItem('workoutHistory');
        return savedData ? JSON.parse(savedData) : [];
    }

    calculateTotalVolume(data) {
        return data.reduce((total, workout) => {
            return total + (workout.sets || []).reduce((serieTotal, set) => {
                return serieTotal + (set.peso * set.reps);
            }, 0);
        }, 0);
    }

    calculateTotalTime(data) {
        return data.length * 60; // 60 minutes average
    }

    getPersonalRecordsCount() {
        const prs = localStorage.getItem('personalRecords');
        return prs ? JSON.parse(prs).length : 4; // Default demo data
    }

    initializeCharts() {
        this.createWeeklyVolumeChart();
        this.createStrengthProgressChart();
    }

    createWeeklyVolumeChart() {
        const ctx = document.getElementById('weeklyVolumeChart');
        if (!ctx) return;

        const weeklyData = this.getWeeklyVolumeData();
        
        this.charts.weeklyVolume = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: weeklyData.labels,
                datasets: [{
                    label: 'Volume (kg)',
                    data: weeklyData.volumes,
                    backgroundColor: 'rgba(59, 130, 246, 0.6)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2,
                    borderRadius: 8,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0,0,0,0.1)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    createStrengthProgressChart() {
        const ctx = document.getElementById('strengthProgressChart');
        if (!ctx) return;

        const exerciseSelect = document.getElementById('exerciseSelect');
        if (exerciseSelect) {
            exerciseSelect.addEventListener('change', (e) => {
                this.updateStrengthChart(e.target.value);
            });
        }

        this.updateStrengthChart('squat');
    }

    updateStrengthChart(exercise) {
        const ctx = document.getElementById('strengthProgressChart');
        const progressData = this.getExerciseProgressData(exercise);
        
        if (this.charts.strengthProgress) {
            this.charts.strengthProgress.destroy();
        }

        this.charts.strengthProgress = new Chart(ctx, {
            type: 'line',
            data: {
                labels: progressData.labels,
                datasets: [{
                    label: 'Peso Massimo (kg)',
                    data: progressData.weights,
                    borderColor: 'rgba(34, 197, 94, 1)',
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: 'rgba(34, 197, 94, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: 'rgba(0,0,0,0.1)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    getWeeklyVolumeData() {
        const weeks = [];
        const volumes = [];
        
        for (let i = 7; i >= 0; i--) {
            weeks.push(`Sett. ${8-i}`);
            volumes.push(Math.floor(Math.random() * 5000) + 2000);
        }
        
        return { labels: weeks, volumes };
    }

    getExerciseProgressData(exercise) {
        const sessions = [];
        const weights = [];
        
        for (let i = 1; i <= 10; i++) {
            sessions.push(`Sess. ${i}`);
            
            switch(exercise) {
                case 'squat':
                    weights.push(80 + (i * 2.5));
                    break;
                case 'bench':
                    weights.push(60 + (i * 1.5));
                    break;
                case 'deadlift':
                    weights.push(100 + (i * 3));
                    break;
                default:
                    weights.push(50 + (i * 2));
            }
        }
        
        return { labels: sessions, weights };
    }

    generateHeatmap() {
        const container = document.getElementById('heatmapGrid');
        if (!container) return;

        const days = 365;
        container.innerHTML = '';

        for (let i = 0; i < days; i++) {
            const day = document.createElement('div');
            day.className = 'heatmap-day';
            
            const activity = Math.floor(Math.random() * 5);
            day.dataset.level = activity;
            day.style.backgroundColor = this.getHeatmapColor(activity);
            
            const date = new Date();
            date.setDate(date.getDate() - (days - i));
            day.title = `${date.toLocaleDateString('it-IT')} - ${activity} allenamenti`;
            
            container.appendChild(day);
        }
    }

    getHeatmapColor(level) {
        const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
        return colors[level] || colors[0];
    }

    loadPersonalRecords() {
        const container = document.getElementById('personalRecordsList');
        if (!container) return;

        const prs = [
            { exercise: 'Squat', weight: '120kg', date: '2024-09-10' },
            { exercise: 'Panca Piana', weight: '85kg', date: '2024-09-08' },
            { exercise: 'Stacco', weight: '140kg', date: '2024-09-12' },
            { exercise: 'Overhead Press', weight: '55kg', date: '2024-09-05' }
        ];

        container.innerHTML = prs.map(pr => `
            <div class="pr-item">
                <div>
                    <div class="pr-exercise">${pr.exercise}</div>
                    <div class="pr-date">${new Date(pr.date).toLocaleDateString('it-IT')}</div>
                </div>
                <div class="pr-value">${pr.weight}</div>
            </div>
        `).join('');
    }
}

// Profile Manager
class ProfileManager {
    constructor() {
        this.settings = this.loadSettings();
        this.init();
    }

    init() {
        this.loadProfile();
        this.bindEvents();
        this.updateDataUsage();
    }

    loadSettings() {
        const saved = localStorage.getItem('appSettings');
        return saved ? JSON.parse(saved) : {
            userName: '',
            userAge: '',
            userWeight: '',
            userHeight: '',
            userGender: '',
            userExperience: 'intermedio',
            userGoals: [],
            unitSystem: 'metric',
            defaultRestTimer: 120,
            workoutNotifications: true,
            darkTheme: false,
            autoSave: true
        };
    }

    loadProfile() {
        Object.keys(this.settings).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (element.type === 'checkbox') {
                    element.checked = this.settings[key];
                } else if (element.multiple) {
                    Array.from(element.options).forEach(option => {
                        option.selected = this.settings[key].includes(option.value);
                    });
                } else {
                    element.value = this.settings[key];
                }
            }
        });

        if (this.settings.darkTheme) {
            document.body.classList.add('dark-theme');
        }
    }

    bindEvents() {
        const inputs = document.querySelectorAll('#profilePage input, #profilePage select');
        inputs.forEach(input => {
            input.addEventListener('change', () => this.saveSettings());
        });

        document.getElementById('exportDataBtn')?.addEventListener('click', () => this.exportData());
        document.getElementById('importDataBtn')?.addEventListener('click', () => this.importData());
        document.getElementById('backupDataBtn')?.addEventListener('click', () => this.backupData());
        document.getElementById('resetDataBtn')?.addEventListener('click', () => this.confirmReset());
        
        document.getElementById('importFileInput')?.addEventListener('change', (e) => this.handleImportFile(e));

        document.getElementById('privacyBtn')?.addEventListener('click', () => this.showPrivacyPolicy());
        document.getElementById('termsBtn')?.addEventListener('click', () => this.showTermsOfService());
        document.getElementById('contactBtn')?.addEventListener('click', () => this.showContact());
    }

    saveSettings() {
        Object.keys(this.settings).forEach(key => {
            const element = document.getElementById(key);
            if (element) {
                if (element.type === 'checkbox') {
                    this.settings[key] = element.checked;
                } else if (element.multiple) {
                    this.settings[key] = Array.from(element.selectedOptions).map(o => o.value);
                } else {
                    this.settings[key] = element.value;
                }
            }
        });

        localStorage.setItem('appSettings', JSON.stringify(this.settings));
        this.showToast('Impostazioni salvate');

        if (this.settings.darkTheme) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    }

    exportData() {
        const data = {
            settings: this.settings,
            workoutHistory: JSON.parse(localStorage.getItem('workoutHistory') || '[]'),
            personalRecords: JSON.parse(localStorage.getItem('personalRecords') || '[]'),
            currentSession: JSON.parse(localStorage.getItem('currentSession') || '{}'),
            exportDate: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `scheda-allenamento-backup-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        this.showToast('Dati esportati con successo');
    }

    importData() {
        document.getElementById('importFileInput').click();
    }

    handleImportFile(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                
                if (data.settings) localStorage.setItem('appSettings', JSON.stringify(data.settings));
                if (data.workoutHistory) localStorage.setItem('workoutHistory', JSON.stringify(data.workoutHistory));
                if (data.personalRecords) localStorage.setItem('personalRecords', JSON.stringify(data.personalRecords));
                if (data.currentSession) localStorage.setItem('currentSession', JSON.stringify(data.currentSession));

                this.showToast('Dati importati con successo');
                setTimeout(() => location.reload(), 1500);
            } catch (error) {
                this.showToast('Errore nell\'importazione dei dati');
            }
        };
        reader.readAsText(file);
    }

    backupData() {
        const backupDate = new Date().toISOString();
        localStorage.setItem('lastBackupDate', backupDate);
        document.getElementById('lastBackupDate').textContent = new Date(backupDate).toLocaleDateString('it-IT');
        
        this.exportData();
        this.showToast('Backup completato');
    }

    confirmReset() {
        app.showModal(
            'Reset Completo',
            'Sei sicuro di voler eliminare tutti i dati? Questa operazione non può essere annullata.',
            () => this.resetAllData()
        );
    }

    resetAllData() {
        localStorage.clear();
        this.showToast('Tutti i dati sono stati eliminati');
        setTimeout(() => location.reload(), 1500);
    }

    updateDataUsage() {
        let totalSize = 0;
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += localStorage[key].length;
            }
        }
        
        const sizeKB = (totalSize / 1024).toFixed(2);
        document.getElementById('dataUsage').textContent = `${sizeKB} KB`;
    }

    showPrivacyPolicy() {
        app.showModal('Privacy Policy', 'I tuoi dati vengono salvati solo localmente sul dispositivo e non vengono mai trasmessi a server esterni.');
    }

    showTermsOfService() {
        app.showModal('Termini di Servizio', 'Questa app è fornita gratuitamente per uso personale. Non ci assumiamo responsabilità per eventuali danni.');
    }

    showContact() {
        app.showModal('Contatti', 'Per supporto o feedback, contattaci all\'indirizzo: support@schedaallenamento.app');
    }

    showToast(message) {
        app.showToast(message);
    }
}

// Initialize app
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new WorkoutApp();
    app.loadCurrentSession(); // Load any existing session data
});