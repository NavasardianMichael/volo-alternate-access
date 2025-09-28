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

  // Global state
  let selectedCourse = ''
  let selectedIndividual = ''
  let filteredPeople = []
  let searchMode = false
  let searchDebounceTimer = null

  // Initialize the application
  function init() {
    setupEventListeners()
    updateSubmitButton()
  }

  // Set up all event listeners
  function setupEventListeners() {
    // Course selection
    $('#courseSelect').on('click', function (e) {
      e.stopPropagation()
      toggleDropdown('courseOptions')
    })

    // Course option selection
    $('#courseOptions').on('click', '.select-item', function (e) {
      e.stopPropagation()
      const value = $(this).data('value')
      selectCourse(value)
    })

    // Individual selection
    $('#individualSelect').on(
      'click',
      '.select-trigger:not(.disabled)',
      function (e) {
        e.stopPropagation()
        if (!searchMode) {
          activateSearchMode()
        }
      }
    )

    // Individual search input
    $('#individualSelect').on('input', '.select-search', function () {
      const searchTerm = $(this).val().toLowerCase()

      // Clear existing timer
      if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer)
      }

      // Set new timer for debounced search
      searchDebounceTimer = setTimeout(function () {
        filterIndividuals(searchTerm)
      }, 500)
    })

    // Individual option selection
    $('#individualOptions').on('click', '.select-item', function (e) {
      e.stopPropagation()
      const personId = $(this).data('value')
      selectIndividual(personId)
    })

    // Close dropdowns when clicking outside
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.custom-select').length) {
        closeAllDropdowns()
        deactivateSearchMode()
      }
    })

    // Form submission
    $('#courseForm').on('submit', function (e) {
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
    const dropdown = $('#' + dropdownId)
    const isOpen = dropdown.hasClass('open')

    closeAllDropdowns()

    if (!isOpen) {
      dropdown.addClass('open')
    }
  }

  // Close all dropdowns
  function closeAllDropdowns() {
    $('.select-content').removeClass('open')
  }

  // Select a course
  function selectCourse(course) {
    selectedCourse = course

    // Update course display
    $('#courseSelect .select-value').text(course).addClass('has-value')

    // Filter people for this course
    filteredPeople = mockPeople.filter((person) => person.courseName === course)

    // Reset individual selection
    selectedIndividual = ''
    resetIndividualSelect()

    // Enable individual select
    enableIndividualSelect()

    // Update hidden input
    $('#selectedCourse').val(course)

    // Close dropdown
    closeAllDropdowns()

    // Update submit button
    updateSubmitButton()
  }

  // Reset individual select to initial state
  function resetIndividualSelect() {
    const trigger = $('#individualSelect .select-trigger')
    const display = trigger.find('.select-value-display')
    const search = trigger.find('.select-search')

    display.text('Individual').removeClass('has-value')
    search.val('').prop('placeholder', 'Begin typing to search')

    $('#selectedIndividual').val('')

    populateIndividualOptions(filteredPeople)
  }

  // Enable individual select
  function enableIndividualSelect() {
    const trigger = $('#individualSelect .select-trigger')
    const search = trigger.find('.select-search')

    trigger.removeClass('disabled')
    search.prop('disabled', false)

    const display = trigger.find('.select-value-display')
    display.text('Individual').attr('data-placeholder', 'Individual')
  }

  // Activate search mode for individual select
  function activateSearchMode() {
    if (selectedCourse && !searchMode) {
      searchMode = true
      const trigger = $('#individualSelect .select-trigger')
      const search = trigger.find('.select-search')

      trigger.addClass('search-mode')
      search.focus()

      toggleDropdown('individualOptions')
      populateIndividualOptions(filteredPeople)
    }
  }

  // Deactivate search mode
  function deactivateSearchMode() {
    if (searchMode) {
      searchMode = false
      const trigger = $('#individualSelect .select-trigger')
      const search = trigger.find('.select-search')

      trigger.removeClass('search-mode')
      search.val('')

      // Clear any pending search debounce timer
      if (searchDebounceTimer) {
        clearTimeout(searchDebounceTimer)
        searchDebounceTimer = null
      }

      // If no selection was made, reset the display
      if (!selectedIndividual) {
        populateIndividualOptions(filteredPeople)
      }
    }
  }

  // Filter individuals based on search term
  function filterIndividuals(searchTerm) {
    let filtered

    if (!searchTerm) {
      filtered = filteredPeople
    } else {
      filtered = filteredPeople.filter((person) => {
        const fullName = `${person.firstName} ${person.lastName}`.toLowerCase()
        const email = person.email.toLowerCase()
        return fullName.includes(searchTerm) || email.includes(searchTerm)
      })
    }

    populateIndividualOptions(filtered)
  }

  // Populate individual options dropdown
  function populateIndividualOptions(people) {
    const container = $('#individualOptions')

    if (people.length === 0) {
      const searchTerm = $('#individualSelect .select-search').val()
      const message = searchTerm
        ? 'No people found'
        : 'No individuals available'
      container.html(`<div class="no-results">${message}</div>`)
    } else {
      let html = ''
      people.forEach((person) => {
        const isSelected = selectedIndividual == person.id
        const selectedClass = isSelected ? ' selected' : ''
        const displayText = `${person.firstName} ${person.lastName} (${person.email})`

        html += `<div class="select-item${selectedClass}" data-value="${person.id}">${displayText}</div>`
      })
      container.html(html)
    }
  }

  // Select an individual
  function selectIndividual(personId) {
    selectedIndividual = personId

    const person = mockPeople.find((p) => p.id == personId)
    if (person) {
      const displayText = `${person.firstName} ${person.lastName} (${person.email})`

      // Update display
      $('#individualSelect .select-value-display')
        .text(displayText)
        .addClass('has-value')

      // Update hidden input
      $('#selectedIndividual').val(personId)
    }

    // Close dropdown and deactivate search mode
    closeAllDropdowns()
    deactivateSearchMode()

    // Update submit button
    updateSubmitButton()
  }

  // Update submit button state
  function updateSubmitButton() {
    const button = $('#submitButton')
    const canSubmit = selectedCourse && selectedIndividual

    button.prop('disabled', !canSubmit)
  }

  // Handle form submission
  function handleSubmit() {
    if (!selectedCourse || !selectedIndividual) {
      alert('Please make both selections.')
      return
    }

    const person = mockPeople.find((p) => p.id == selectedIndividual)
    const personDisplay = person
      ? `${person.firstName} ${person.lastName} (${person.email})`
      : 'Unknown'

    alert(
      `Form submitted!\nCourse: ${selectedCourse}\nIndividual: ${personDisplay}`
    )

    // Here you would typically send the data to a server
    console.log('Form data:', {
      course: selectedCourse,
      individual: selectedIndividual,
      person: person,
    })
  }

  // Initialize the application when the document is ready
  init()
})
