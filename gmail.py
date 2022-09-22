import smtplib

#gmail_user = 'guhan.ragu@gmail.com'
gmail_user = 'coach.td@transitiondoor.com'
#gmail_password = 'dhineshA!2#'
gmail_password = 'transitiondoor22'

sent_from = gmail_user
to = ['guhan.ragu@gmail.com']
subject = 'Lorem ipsum dolor sit amet'
body = 'consectetur adipiscing elit'

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, ", ".join(to), subject, body)

try:
    smtp_server = smtplib.SMTP_SSL('smtpout.secureserver.net', 465)
    smtp_server.ehlo()
    smtp_server.login(gmail_user, gmail_password)
    smtp_server.sendmail(sent_from, to, email_text)
    smtp_server.close()
    print ("Email sent successfully!")
except Exception as ex:
    print ("Something went wrong….",ex)
