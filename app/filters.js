//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/filters/
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

addFilter('formatDate', (day, month, year) => {
  if (!day || !month || !year) {
    return ''
  }
  const date = new Date(year, month - 1, day)
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
})

