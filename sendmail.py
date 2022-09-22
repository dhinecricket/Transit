#!/usr/bin/env python

import smtplib
#from email.MIMEMultipart import MIMEMultipart
#from email.MIMEText import MIMEText

#msg = MIMEMultipart()
"""msg.set_unixfrom('author')
msg['From'] = 'coach.td@transitiondoor.com'
msg['To'] = 'vhelp.td@transitiondoor.com'
msg['Subject'] = 'simple email in python'"""
message = 'here is the email'
#msg.attach(MIMEText(message))

mailserver = smtplib.SMTP_SSL('smtpout.secureserver.net', 465)
mailserver.ehlo()
mailserver.login('vhelp.td@transitiondoor.com', 'transitondoor22')

mailserver.sendmail('coach.td@transitiondoor.com','vhelp.td@transitiondoor.com',message)

mailserver.quit()
