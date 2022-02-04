const state = {
  calendar: [{ key: 'today', highlight: true, dates: new Date() }],
  currentDate: new Date()
}

const getters = {
}

const actions = {
  getDefaultCalendarAttributes ({ commit, state }) {
    const value = [{ key: 'today', highlight: false, dates: new Date() }]
    commit('basic', { key: 'calendar', value })
  },
  setDots ({ commit, state }, dates) {
    const calendarDates = []
    for (const date of dates) {
      const splittedDate = date.split('-')
      calendarDates.push(new Date(+splittedDate[2], splittedDate[1] - 1, +splittedDate[0]))
    }
    const attr = { dot: true, dates: calendarDates }
    const value = [{ key: 'today', highlight: false, dates: new Date() }, attr]
    commit('basic', { key: 'calendar', value })
  }
}

const mutations = {
  basic (state, payload) {
    state[payload.key] = payload.value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
