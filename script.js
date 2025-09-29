$(document).ready(function () {
  // Mock data - converted from React component
  const mockPeople = [
    // Global Technologies (15 people) - largest company
    {
      id: 1,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 2,
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily.davis@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 3,
      firstName: 'Christopher',
      lastName: 'Lee',
      email: 'chris.lee@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 4,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 'sarah.johnson@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'michael.brown@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 6,
      firstName: 'Lisa',
      lastName: 'Anderson',
      email: 'lisa.anderson@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 7,
      firstName: 'Kevin',
      lastName: 'Wilson',
      email: 'kevin.wilson@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 8,
      firstName: 'Rachel',
      lastName: 'Thomas',
      email: 'rachel.thomas@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Mastery',
    },
    {
      id: 9,
      firstName: 'Andrew',
      lastName: 'Martin',
      email: 'andrew.martin@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 10,
      firstName: 'Melissa',
      lastName: 'Garcia',
      email: 'melissa.garcia@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 11,
      firstName: 'Jonathan',
      lastName: 'Rodriguez',
      email: 'jonathan.rodriguez@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 12,
      firstName: 'Lauren',
      lastName: 'Lewis',
      email: 'lauren.lewis@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 13,
      firstName: 'Steven',
      lastName: 'Wright',
      email: 'steven.wright@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 14,
      firstName: 'Angela',
      lastName: 'King',
      email: 'angela.king@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 15,
      firstName: 'Eric',
      lastName: 'Nelson',
      email: 'eric.nelson@globaltech.com',
      company: 'Global Technologies',
      courseName: 'Breakthrough Execution Program',
    },
    // First National Bank (8 people)
    {
      id: 16,
      firstName: 'Timothy',
      lastName: 'Hall',
      email: 'timothy.hall@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 17,
      firstName: 'James',
      lastName: 'Taylor',
      email: 'james.taylor@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Mastery',
    },
    {
      id: 18,
      firstName: 'Michelle',
      lastName: 'Rodriguez',
      email: 'michelle.rodriguez@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 19,
      firstName: 'Daniel',
      lastName: 'Thompson',
      email: 'daniel.thompson@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 20,
      firstName: 'Jennifer',
      lastName: 'Adams',
      email: 'jennifer.adams@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 21,
      firstName: 'Mark',
      lastName: 'Young',
      email: 'mark.young@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 22,
      firstName: 'Rebecca',
      lastName: 'Perez',
      email: 'rebecca.perez@firstnational.com',
      company: 'First National Bank',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 23,
      firstName: 'Joshua',
      lastName: 'Phillips',
      email: 'joshua.phillips@firstnational.net',
      company: 'First National Bank',
      courseName: 'Executive Mastery',
    },
    // Regional Healthcare Network (7 people)
    {
      id: 24,
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Breakthrough Execution Program',
    },
    {
      id: 25,
      firstName: 'Stephanie',
      lastName: 'Harris',
      email: 'stephanie.harris@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 26,
      firstName: 'Kimberly',
      lastName: 'Allen',
      email: 'kimberly.allen@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 27,
      firstName: 'Michelle',
      lastName: 'Scott',
      email: 'michelle.scott@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 28,
      firstName: 'Samantha',
      lastName: 'Carter',
      email: 'samantha.carter@regionalhealthcare.edu',
      company: 'Regional Healthcare Network',
      courseName: 'Breakthrough Execution Program',
    },
    {
      id: 29,
      firstName: 'Gregory',
      lastName: 'Mitchell',
      email: 'gregory.mitchell@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 30,
      firstName: 'Heather',
      lastName: 'Turner',
      email: 'heather.turner@regionalhealthcare.com',
      company: 'Regional Healthcare Network',
      courseName: 'Executive Challenge Course',
    },
    // TechCorp Solutions (6 people)
    {
      id: 31,
      firstName: 'David',
      lastName: 'Wilson',
      email: 'david.wilson@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 32,
      firstName: 'Jessica',
      lastName: 'Martinez',
      email: 'jessica.martinez@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 33,
      firstName: 'Brandon',
      lastName: 'Jackson',
      email: 'brandon.jackson@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 34,
      firstName: 'Ryan',
      lastName: 'Moore',
      email: 'ryan.moore@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Executive Mastery',
    },
    {
      id: 35,
      firstName: 'Jason',
      lastName: 'Walker',
      email: 'jason.walker@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Breakthrough Execution Program',
    },
    {
      id: 36,
      firstName: 'Adam',
      lastName: 'Roberts',
      email: 'adam.roberts@techcorp.com',
      company: 'TechCorp Solutions',
      courseName: 'Executive Challenge Course',
    },
    // Wilson Consulting (5 people)
    {
      id: 37,
      firstName: 'Nicole',
      lastName: 'Wilson',
      email: 'nicole.wilson@wilsonconsulting.com',
      company: 'Wilson Consulting',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 38,
      firstName: 'Matthew',
      lastName: 'Davis',
      email: 'matthew.davis@wilsonconsulting.com',
      company: 'Wilson Consulting',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 39,
      firstName: 'Ashley',
      lastName: 'Johnson',
      email: 'ashley.johnson@wilsonconsulting.com',
      company: 'Wilson Consulting',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 40,
      firstName: 'Paul',
      lastName: 'Green',
      email: 'paul.green@wilsonconsulting.com',
      company: 'Wilson Consulting',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 41,
      firstName: 'Maria',
      lastName: 'Gonzalez',
      email: 'maria.gonzalez@wilsonconsulting.com',
      company: 'Wilson Consulting',
      courseName: 'Executive Challenge Course',
    },
    // State University (5 people)
    {
      id: 42,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'm.brown@stateuniversity.edu',
      company: 'State University',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 43,
      firstName: 'Sarah',
      lastName: 'Taylor',
      email: 'sarah.taylor@stateuniversity.edu',
      company: 'State University',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 44,
      firstName: 'Jennifer',
      lastName: 'Baker',
      email: 'jennifer.baker@stateuniversity.com',
      company: 'State University',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 45,
      firstName: 'John',
      lastName: 'Williams',
      email: 'john.williams@stateuniversity.com',
      company: 'State University',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 46,
      firstName: 'Amy',
      lastName: 'Campbell',
      email: 'amy.campbell@stateuniversity.com',
      company: 'State University',
      courseName: 'Breakthrough Execution Program',
    },
    // Miller & Partners Law (3 people)
    {
      id: 47,
      firstName: 'Jennifer',
      lastName: 'Miller',
      email: 'jennifer.miller@millerlaw.net',
      company: 'Miller & Partners Law',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 48,
      firstName: 'Robert',
      lastName: 'Garcia',
      email: 'robert.garcia@millerlaw.com',
      company: 'Miller & Partners Law',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 49,
      firstName: 'Amanda',
      lastName: 'White',
      email: 'amanda.white@millerlaw.com',
      company: 'Miller & Partners Law',
      courseName: 'Executive Challenge Course',
    },
    // Smith & Associates (3 people)
    {
      id: 50,
      firstName: 'John',
      lastName: 'Smith',
      email: 'j.smith@smithassociates.com',
      company: 'Smith & Associates',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 51,
      firstName: 'David',
      lastName: 'Smith',
      email: 'david.smith@smithassociates.com',
      company: 'Smith & Associates',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 52,
      firstName: 'Sarah',
      lastName: 'Johnson',
      email: 's.johnson@smithassociates.com',
      company: 'Smith & Associates',
      courseName: 'Executive Challenge Course',
    },
    // Premier Real Estate (2 people)
    {
      id: 53,
      firstName: 'David',
      lastName: 'Smith',
      email: 'd.smith@premierrealty.com',
      company: 'Premier Real Estate',
      courseName: 'Executive Challenge Course',
    },
    {
      id: 54,
      firstName: 'Jennifer',
      lastName: 'Miller',
      email: 'j.miller@premierrealty.com',
      company: 'Premier Real Estate',
      courseName: 'Breakthrough Execution Program',
    },
    // FastTrack Logistics (1 person)
    {
      id: 55,
      firstName: 'Michael',
      lastName: 'Brown',
      email: 'mike.brown@fasttracklogistics.net',
      company: 'FastTrack Logistics',
      courseName: 'Executive Mastery',
    },
  ]

  // Container element for scoped DOM selection
  const $container = $('#alternate-access-app')

  // Hardcoded courses data
  const coursesData = [
    { id: 'breakthrough-execution', name: 'Breakthrough Execution Program' },
    { id: 'breakthrough-intensive', name: 'Breakthrough Intensive' },
    { id: 'executive-challenge', name: 'Executive Challenge Course' },
    { id: 'executive-mastery', name: 'Executive Mastery' },
  ]

  // Application state
  const appState = {
    courses: {
      byId: {},
      allIds: [],
      selectedCourseId: null,
    },
    individuals: {
      byId: {},
      allIdsByCourseId: {},
      selectedIndividualId: null,
    },
    isSearchActive: false,
  }

  let searchDebounceTimer = null

  // Initialize courses in state
  function initializeCourses() {
    coursesData.forEach((course) => {
      appState.courses.byId[course.id] = course
      appState.courses.allIds.push(course.id)
    })
  }

  // Simulate API call to fetch individuals for a course
  async function fetchIndividualsForCourse(courseId) {
    // Always show loading for a minimum duration to make it visible
    const minLoadingTime = 1000 // 1 second minimum
    const startTime = Date.now()

    // Return cached data if available
    if (appState.individuals.allIdsByCourseId[courseId]) {
      // Even with cached data, show loading for minimum duration
      const elapsed = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsed)

      if (remainingTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingTime))
      }

      return appState.individuals.allIdsByCourseId[courseId].map(
        (id) => appState.individuals.byId[id]
      )
    }

    // Simulate API delay for new data
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Filter mock data based on course
    const courseNameMap = {
      'breakthrough-execution': 'Breakthrough Execution Program',
      'breakthrough-intensive': 'Breakthrough Intensive',
      'executive-challenge': 'Executive Challenge Course',
      'executive-mastery': 'Executive Mastery',
    }

    const courseName = courseNameMap[courseId]
    const individuals = mockPeople.filter(
      (person) => person.courseName === courseName
    )

    // Store in state
    appState.individuals.allIdsByCourseId[courseId] = []
    individuals.forEach((person) => {
      appState.individuals.byId[person.id] = person
      appState.individuals.allIdsByCourseId[courseId].push(person.id)
    })

    return individuals
  }

  // Initialize the application
  function init() {
    initializeCourses()
    populateCourseOptions()
    setupEventListeners()
    updateSubmitButton()
  }

  // Populate course options in the dropdown
  function populateCourseOptions() {
    const $courseContainer = $container.find('#courseOptions')
    let html = ''

    appState.courses.allIds.forEach((courseId) => {
      const course = appState.courses.byId[courseId]
      html += `<div class="select-item" data-value="${course.id}">${course.name}</div>`
    })

    $courseContainer.html(html)
  }

  // Set up all event listeners
  function setupEventListeners() {
    // Course selection - prevent opening when disabled
    $container.find('#courseSelect').on('click', function (e) {
      e.stopPropagation()

      // Check if the trigger is disabled
      const trigger = $(this).find('.select-trigger')
      if (trigger.hasClass('disabled')) {
        return // Don't open dropdown if disabled
      }

      toggleDropdown('courseOptions')
    })

    // Course option selection
    $container.find('#courseOptions').on('click', '.select-item', function (e) {
      e.stopPropagation()
      const courseId = $(this).data('value')
      selectCourse(courseId)
    })

    // Individual selection
    $container
      .find('#individualSelect')
      .on('click', '.select-trigger:not(.disabled)', function (e) {
        e.stopPropagation()
        if (!appState.isSearchActive) {
          activateSearchMode()
        } else {
          // If search mode is already active but dropdown is closed, open it
          const dropdown = $container.find('#individualOptions')
          if (!dropdown.hasClass('open')) {
            toggleDropdown('individualOptions')
          }
        }
      })

    // Individual search input
    $container
      .find('#individualSelect')
      .on('input', '.select-search', function () {
        const searchTerm = $(this).val().toLowerCase()

        // Clear existing timer
        if (searchDebounceTimer) {
          clearTimeout(searchDebounceTimer)
        }

        // Set new timer for debounced search
        searchDebounceTimer = setTimeout(function () {
          filterIndividuals(searchTerm)
        }, 300)
      })

    // Individual option selection
    $container
      .find('#individualOptions')
      .on('click', '.select-item', function (e) {
        e.stopPropagation()
        const personId = $(this).data('value')
        selectIndividual(personId)
      })

    // Close dropdowns when clicking outside
    $(document).on('click', function (e) {
      // Check if click is outside any custom-select within our container
      const $target = $(e.target)
      const $customSelects = $container.find('.custom-select')
      let isOutside = true

      $customSelects.each(function () {
        if ($target.closest(this).length > 0) {
          isOutside = false
          return false // break the loop
        }
      })

      if (isOutside) {
        closeAllDropdowns()
        deactivateSearchMode()
      }
    })

    // Form submission - changed from form submit to button click
    $container.find('#submitButton').on('click', function (e) {
      e.preventDefault()
      handleSubmit()
    })

    // Keyboard navigation
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAllDropdowns()
        deactivateSearchMode()
      }
    })
  }

  // Toggle dropdown visibility
  function toggleDropdown(dropdownId) {
    const dropdown = $container.find('#' + dropdownId)
    const isOpen = dropdown.hasClass('open')

    closeAllDropdowns()

    if (!isOpen) {
      dropdown.addClass('open')
    }
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    $container.find('.select-content').removeClass('open')
  }

  // Select a course
  async function selectCourse(courseId) {
    // Skip if the same course is already selected
    if (appState.courses.selectedCourseId === courseId) {
      // Just close the dropdown and return
      closeAllDropdowns()
      return
    }

    appState.courses.selectedCourseId = courseId
    const course = appState.courses.byId[courseId]

    // Update course display
    $container
      .find('#courseSelect .select-value')
      .text(course.name)
      .addClass('has-value')

    // Close all dropdowns immediately
    closeAllDropdowns()

    // Reset individual selection
    appState.individuals.selectedIndividualId = null
    resetIndividualSelect()

    // Check if data is already cached
    const isDataCached = appState.individuals.allIdsByCourseId[courseId]

    if (isDataCached) {
      // Data is cached - immediately enable and populate
      enableIndividualSelect()
      populateIndividualOptions()
    } else {
      // Data needs to be fetched - show loading state
      showIndividualLoading()

      try {
        // Fetch individuals for this course
        await fetchIndividualsForCourse(courseId)

        // Enable individual select and populate options
        enableIndividualSelect()
        populateIndividualOptions()
      } catch (error) {
        console.error('Error fetching individuals:', error)
        showIndividualError()
      }
    }

    // Update submit button
    updateSubmitButton()
  }

  // Show loading state for individual select
  function showIndividualLoading() {
    // Disable course dropdown to prevent changes during loading
    const courseTrigger = $container.find('#courseSelect .select-trigger')
    courseTrigger.addClass('disabled loading')

    // Disable individual dropdown
    const trigger = $container.find('#individualSelect .select-trigger')
    const display = trigger.find('.select-value-display')
    const search = trigger.find('.select-search')

    // Disable the entire trigger and search input
    trigger.addClass('disabled loading')
    search.prop('disabled', true)

    // Update display text with loading indicator and animation
    display
      .text('Loading individuals...')
      .removeClass('has-value')
      .addClass('loading-text')

    // Show loading state in dropdown
    const container = $container.find('#individualOptions')
    container.html(`
      <div class="no-results loading-message">
        <div class="loading-spinner"></div>
        Loading individuals...
      </div>
    `)

    // Ensure dropdown is closed
    container.removeClass('open')
  }

  // Show error state for individual select
  function showIndividualError() {
    // Re-enable course dropdown even on error
    const courseTrigger = $container.find('#courseSelect .select-trigger')
    courseTrigger.removeClass('disabled loading')

    // Handle individual dropdown error state
    const trigger = $container.find('#individualSelect .select-trigger')
    const display = trigger.find('.select-value-display')

    // Remove loading states and add error styling
    trigger.removeClass('loading').addClass('error')
    display
      .text('Error loading individuals')
      .removeClass('has-value loading-text')

    const container = $container.find('#individualOptions')
    container.html(
      '<div class="no-results error-message">Error loading individuals</div>'
    )
  }

  // Reset individual select to initial state
  function resetIndividualSelect() {
    const trigger = $container.find('#individualSelect .select-trigger')
    const display = trigger.find('.select-value-display')
    const search = trigger.find('.select-search')

    display.text('Individual').removeClass('has-value')
    search.val('').prop('placeholder', 'Individual')

    // Make sure we're not in search mode
    appState.isSearchActive = false
    trigger.removeClass('search-mode')
  }

  // Enable individual select
  function enableIndividualSelect() {
    // Re-enable course dropdown
    const courseTrigger = $container.find('#courseSelect .select-trigger')
    courseTrigger.removeClass('disabled loading')

    // Re-enable individual dropdown
    const trigger = $container.find('#individualSelect .select-trigger')
    const search = trigger.find('.select-search')
    const display = trigger.find('.select-value-display')

    // Remove disabled, loading, and error states
    trigger.removeClass('disabled loading error')
    search.prop('disabled', false)

    // Reset display text and remove loading classes
    display
      .text('Individual')
      .removeClass('loading-text')
      .attr('data-placeholder', 'Individual')
  }

  // Activate search mode for individual select
  function activateSearchMode() {
    if (appState.courses.selectedCourseId && !appState.isSearchActive) {
      appState.isSearchActive = true
      const trigger = $container.find('#individualSelect .select-trigger')
      const search = trigger.find('.select-search')

      trigger.addClass('search-mode')
      search.prop('placeholder', 'Begin typing to search').focus()

      toggleDropdown('individualOptions')
      populateIndividualOptions()
    }
  }

  // Deactivate search mode
  function deactivateSearchMode() {
    if (appState.isSearchActive) {
      appState.isSearchActive = false
      const trigger = $container.find('#individualSelect .select-trigger')
      const search = trigger.find('.select-search')

      trigger.removeClass('search-mode')
      search.val('')

      // Clear any pending search debounce timer
      if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer)
        searchDebounceTimer = null
      }

      // If no selection was made, reset the display
      if (!appState.individuals.selectedIndividualId) {
        populateIndividualOptions()
      }
    }
  } // Filter individuals based on search term
  // Filter individuals based on search term and populate dropdown
  function filterIndividuals(searchTerm) {
    populateIndividualOptions(searchTerm)
  }

  // Populate individual options dropdown
  function populateIndividualOptions(searchTerm = '') {
    const container = $container.find('#individualOptions')

    if (!appState.courses.selectedCourseId) {
      container.html('<div class="no-results">No individuals available</div>')
      return
    }

    const individualIds =
      appState.individuals.allIdsByCourseId[
        appState.courses.selectedCourseId
      ] || []
    let individuals = individualIds.map((id) => appState.individuals.byId[id])

    // Filter by search term if provided
    if (searchTerm) {
      individuals = individuals.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase()
        const email = person.email.toLowerCase()
        return (
          fullName.includes(searchTerm.toLowerCase()) ||
          email.includes(searchTerm.toLowerCase())
        )
      })
    }

    if (individuals.length === 0) {
      const message = searchTerm
        ? 'No people found'
        : 'No individuals available'
      container.html(`<div class="no-results">${message}</div>`)
    } else {
      let html = ''
      individuals.forEach((person) => {
        const isSelected =
          appState.individuals.selectedIndividualId == person.id
        const selectedClass = isSelected ? ' selected' : ''
        const displayText = `${person.firstName} ${person.lastName} (${person.email})`
        const checkIcon = isSelected
          ? `
          <span class="absolute right-2 flex size-3.5 items-center justify-center">
            <img src="checkmark.svg" alt="✓" class="size-4" />
          </span>
        `
          : ''

        html += `<div class="select-item${selectedClass}" data-value="${person.id}">
          <span class="select-item-text">${displayText}</span>
          ${checkIcon}
        </div>`
      })
      container.html(html)
    }
  }

  // Select an individual
  function selectIndividual(personId) {
    appState.individuals.selectedIndividualId = personId

    const person = appState.individuals.byId[personId]
    if (person) {
      const displayText = `${person.firstName} ${person.lastName} (${person.email})`

      // Update display
      $container
        .find('#individualSelect .select-value-display')
        .text(displayText)
        .addClass('has-value')
    }

    // Close dropdown and deactivate search mode
    closeAllDropdowns()
    deactivateSearchMode()

    // Update submit button
    updateSubmitButton()
  }

  // Update submit button state
  function updateSubmitButton() {
    const button = $container.find('#submitButton')
    const canSubmit =
      appState.courses.selectedCourseId &&
      appState.individuals.selectedIndividualId

    button.prop('disabled', !canSubmit)
  }

  // Handle form submission
  function handleSubmit() {
    if (
      !appState.courses.selectedCourseId ||
      !appState.individuals.selectedIndividualId
    ) {
      alert('Please make both selections.')
      return
    }

    const course = appState.courses.byId[appState.courses.selectedCourseId]
    const person =
      appState.individuals.byId[appState.individuals.selectedIndividualId]
    const personDisplay = person
      ? `${person.firstName} ${person.lastName} (${person.email})`
      : 'Unknown'

    alert(
      `Form submitted!\nCourse: ${course.name}\nIndividual: ${personDisplay}`
    )

    // Here you would typically send the data to a server
    console.log('Form data:', {
      courseId: appState.courses.selectedCourseId,
      course: course,
      individualId: appState.individuals.selectedIndividualId,
      person: person,
    })
  }

  // Initialize the application when the document is ready
  init()
})
