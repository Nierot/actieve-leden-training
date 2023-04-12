import express from 'express'
import * as SibApiV3Sdk from '@sendinblue/client'
import { key } from './keys';

const app = express()
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, key)

app.use(express.json())
app.use(express.static('static'))

app.post('/wh_services/publisher/forms/callFormService', (req, res) => {
  const json = req.body
  const fields = json.params[1].fields

  sendEmail(buildEmail(fields))

  res.send('ok')
})

app.listen(3000, () => {
  console.log('Listening on port 3000!')
})

function buildEmail(fields: Record<string, any>): string {
  const lines = []

  lines.push('Hoihoi iemand heeft het evendesk formulier ingevuld!')
  lines.push('')
  lines.push('Hieronder de gegevens:')

  lines.push('<table><thead><tr><th>Sleutel</th><th>Waarde</th></tr></thead><tbody>')
  for (const [key, value] of Object.entries(fields)) {
    lines.push(`<tr><td>${key}</td> <td>${value === '' ? 'undefined' : value}</td></tr>`)
  }
  lines.push('</tbody></table>')
  lines.push('')

  lines.push('Groetjes,')
  lines.push('Oliver (de bot die dit verstuurd heeft)')

  return lines.join('\n')
}

function sendEmail(email: string) {

  var sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail()
  sendSmtpEmail.sender = {
    name: 'IA Eventdesk',
    email: 'eventdesk.notifications@nierot.com'
  }
  sendSmtpEmail.to = [{ 
    email: 'rotmensenn@inter-actief.net'
  }]
  sendSmtpEmail.subject = 'Eventdesk email'
  sendSmtpEmail.textContent = email

  apiInstance.sendTransacEmail(sendSmtpEmail)
    .then(data => {
      console.log('API called successfully.');
    })
    .catch(err => {
      console.error('Error while calling API')
      console.error(err)
    })

}