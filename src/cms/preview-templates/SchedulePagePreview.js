import React from 'react'
import PropTypes from 'prop-types'
import { SchedulePageTemplate } from '../../templates/schedule-page'

const SchedulePagePreview = ({ entry, widgetFor }) => (
  <SchedulePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

SchedulePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default SchedulePagePreview
