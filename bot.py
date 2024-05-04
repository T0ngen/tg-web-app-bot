from pyrogram import Client, filters
import logging
import asyncio
import schedule
import aiohttp
from pyrogram import enums
# import mysql.connector.pooling

bot_name = "bot4"
# proxy_host = "78.136.205.229"
# proxy_port = 63987
# proxy_username = "zPM6ju8G"
# proxy_password = "inyA2RYN"

# proxy = {
#      "scheme": "socks5",  # "socks4", "socks5" and "http" are supported
#      "hostname": proxy_host,
#      "port": proxy_port,
#      "username": proxy_username,
#      "password": proxy_password
#  }




text_flilance = '''
#помогу #сделаю #чатбот #разработка #сайт #верстка #программист 

Привет! 

я занимаюсь разработкой сайтов, чат-ботов, парсеров, скриптов для автоматизации работы 

✅ Учитываю все ваши пожелания;
✅Все технические задания сдаю вовремя;
✅Приятен в общении и отвечу даже на самые глупые вопросы 


❗️ Важно понимать, что указанный мной перечень услуг не является полным.

Каждый проект разрабатывается индивидуально

По всем вопросам пиши: @BotLab_dev

'''




app = Client("account17463049", api_id=17463049, api_hash="bd4bbac77f54cd096ede52dd2e8e2e50")
logging.basicConfig(level=logging.INFO)



async def job1():
    #Скамил мамонта
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс
📝Связь: @BotLab_dev'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001377428277, f"{text}\nПиши в лс")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        














       
        
async def job2():
    #Mango chat
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001279381478, f"{text}\n📝Связь: @{username}\n🫐Гарант: @CryptoGuarantBot")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        
        
async def job3():
    #Cherry chat
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001579506639, f"{text}\n📝Связь: @{username}\n🫐Гарант: @CryptoGuarantBot")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')



       
async def job321():
    #Cherry chat
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001266598286, f"{text}\n📝Связь: @{username}\n🫐Гарант: @GarantScroogeBot")
        print("Message sent successfully!")
        await app.send_message('me', 'cкрудж отправлен')
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')






        
async def job4():
    #OGMA chat
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001793694438, f"{text}\n📬Контакт: @{username}\n🎖Гарант: @OgmaWarrantbot")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        

async def job5():
    #s&a chat
    try:
        text ='''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001304553138, f"{text}\n📝Связь: @{username}\n🎩 Гарант: @GarantBotSa_bot")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        
        
async def job6():
    #RICOCHET rinok
    try:
        text ='''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001496961087, f"{text}\n📝Связь: @{username}\n🎩 Гарант: ++")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        
async def job7():
    #Royal chat
    try:
        text ='''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001169378312, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        
async def job8():
    #Gansta
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001409985813, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error{bot_name}: {e}')
        
# async def job9():
#     #Услуги Альфреда
#     try:
#         text = await check_text(bot_name)
#         username = await check_svyaz(bot_name)
#         # await app.send_message("me", "hey")
#         await app.send_message(-1001481801207, f"{text}\n📝Связь: @{username}")
#         print("Message sent successfully!")
#         print("Waiting...")
#     except Exception as e:
#         print(e)
#         await app.send_message('me', f'Error{bot_name}: {e}')
        
        
async def job10():
    #На америку чат
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001282346597, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')

async def job11():
    #NEIZVESTNO чат
    try:
        text = text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001216918086, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')

# async def job12():
#     #ABYSS чат
#     try:
#         text = await check_text(bot_name)
#         username = await check_svyaz(bot_name)
#         # await app.send_message("me", "hey")
#         await app.send_message(-1001330524944, f"{text}\n💢 Связь: @{username}\n🆎Гарант: @AbyssXGarantbot")
#         print("Message sent successfully!")
#         print("Waiting...")
#     except Exception as e:
#         print(e)
#         await app.send_message('me', f'Error: {e}')
        
        
async def job13():
    #REDVIRUSCHAT чат
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001778955164, f"{text}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')
        

async def job14():
    #ТЕНЕВЫЕ УСЛУГИ чат
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001778698405, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')
        
async def job15():
    #GEt chat
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001200599203, f"{text}\n📝Связь: @{username}\n🎩 Гарант: @getgarantbot")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')
                
#===========================================================================
async def jobs1():
    try:
        
        await app.send_message(-1001289147868, text_flilance)
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        await app.send_message('me', f'Error: {e}')

async def job22():
    try:
        
        await app.send_message(-1001360151362, text_flilance)
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        await app.send_message('me', f'Error: {e}')

async def job33():
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001901756403, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')


async def job44():
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001713152739, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')

async def job55():
    try:
        text = '''🤯 Услуги Кодера.

Делаю:
- 🌐 Cайты/API (Front и back)
- 🤖 Телеграм бⲟты
- 🗃 Работa c BD ⟮SQL/Mongo/Firebase)

Умею и помогу:
- ☁️ Cloudflare
- 💾 Ⲣаб᧐та с VDS/VPS
- 🛡 Nginx/UFW
- 🌐 Д൦мeны/DNS

🔰 Αрендa/продaжа готовых проектов
⚪️ Д൦работка/зaпуск/обновление ваших скриптов

П᧐могу лично тебе, пиши в лс'''
        username = 'BotLab_dev'
        # await app.send_message("me", "hey")
        await app.send_message(-1001338720514, f"{text}\n📝Связь: @{username}")
        print("Message sent successfully!")
        print("Waiting...")
    except Exception as e:
        print(e)
        await app.send_message('me', f'Error: {e}')


#===========================================================================

schedule.every().day.at("10:31").do(lambda: asyncio.create_task(job1()))
schedule.every().day.at("15:31").do(lambda: asyncio.create_task(job1()))
schedule.every().day.at("19:51").do(lambda: asyncio.create_task(job1()))

schedule.every().day.at("10:41").do(lambda: asyncio.create_task(job2()))
schedule.every().day.at("15:41").do(lambda: asyncio.create_task(job2()))
schedule.every().day.at("20:31").do(lambda: asyncio.create_task(job2()))



schedule.every().day.at("10:51").do(lambda: asyncio.create_task(job3()))
schedule.every().day.at("15:51").do(lambda: asyncio.create_task(job3()))
schedule.every().day.at("20:41").do(lambda: asyncio.create_task(job3()))


schedule.every().day.at("10:51").do(lambda: asyncio.create_task(job55()))
schedule.every().day.at("15:51").do(lambda: asyncio.create_task(job55()))
schedule.every().day.at("20:41").do(lambda: asyncio.create_task(job55()))


schedule.every().day.at("11:31").do(lambda: asyncio.create_task(job4()))
schedule.every().day.at("16:31").do(lambda: asyncio.create_task(job4()))
schedule.every().day.at("20:51").do(lambda: asyncio.create_task(job4()))



schedule.every().day.at("11:41").do(lambda: asyncio.create_task(job5()))
schedule.every().day.at("16:41").do(lambda: asyncio.create_task(job5()))
schedule.every().day.at("21:31").do(lambda: asyncio.create_task(job5()))


schedule.every().day.at("12:31").do(lambda: asyncio.create_task(job6()))
schedule.every().day.at("16:51").do(lambda: asyncio.create_task(job6()))
schedule.every().day.at("21:41").do(lambda: asyncio.create_task(job6()))


schedule.every().day.at("12:41").do(lambda: asyncio.create_task(job7()))
schedule.every().day.at("17:31").do(lambda: asyncio.create_task(job7()))
schedule.every().day.at("21:51").do(lambda: asyncio.create_task(job7()))


schedule.every().day.at("12:51").do(lambda: asyncio.create_task(job8()))
schedule.every().day.at("17:41").do(lambda: asyncio.create_task(job8()))
schedule.every().day.at("22:31").do(lambda: asyncio.create_task(job8()))






# schedule.every().day.at("13:31").do(lambda: asyncio.create_task(job9()))
schedule.every().day.at("07:51").do(lambda: asyncio.create_task(job6()))
# schedule.every().day.at("22:41").do(lambda: asyncio.create_task(job9()))

schedule.every().day.at("13:41").do(lambda: asyncio.create_task(job10()))
schedule.every().day.at("18:31").do(lambda: asyncio.create_task(job10()))
schedule.every().day.at("22:51").do(lambda: asyncio.create_task(job10()))

schedule.every().day.at("13:52").do(lambda: asyncio.create_task(job11()))
schedule.every().day.at("18:41").do(lambda: asyncio.create_task(job11()))
schedule.every().day.at("23:31").do(lambda: asyncio.create_task(job11()))

# schedule.every().day.at("14:31").do(lambda: asyncio.create_task(job12()))
schedule.every().day.at("00:59").do(lambda: asyncio.create_task(job6()))
# schedule.every().day.at("23:41").do(lambda: asyncio.create_task(job12()))


schedule.every().day.at("14:41").do(lambda: asyncio.create_task(job13()))
schedule.every().day.at("19:31").do(lambda: asyncio.create_task(job13()))
schedule.every().day.at("23:41").do(lambda: asyncio.create_task(job13()))


schedule.every().day.at("14:51").do(lambda: asyncio.create_task(job14()))
schedule.every().day.at("19:41").do(lambda: asyncio.create_task(job14()))
schedule.every().day.at("00:31").do(lambda: asyncio.create_task(job14()))


schedule.every().day.at("12:11").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("19:11").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("00:11").do(lambda: asyncio.create_task(job15()))

#=======================================================================================
schedule.every().day.at("10:00").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("15:00").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("19:00").do(lambda: asyncio.create_task(job14()))
schedule.every().day.at("21:00").do(lambda: asyncio.create_task(job15()))

schedule.every().day.at("11:00").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("16:00").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("18:00").do(lambda: asyncio.create_task(job15()))
schedule.every().day.at("22:00").do(lambda: asyncio.create_task(job15()))


schedule.every().day.at("12:00").do(lambda: asyncio.create_task(job33()))
schedule.every().day.at("17:00").do(lambda: asyncio.create_task(job33()))
schedule.every().day.at("18:10").do(lambda: asyncio.create_task(job33()))
schedule.every().day.at("23:00").do(lambda: asyncio.create_task(job33()))



schedule.every().day.at("13:00").do(lambda: asyncio.create_task(job44()))
schedule.every().day.at("15:10").do(lambda: asyncio.create_task(job44()))
schedule.every().day.at("18:20").do(lambda: asyncio.create_task(job44()))
schedule.every().day.at("22:10").do(lambda: asyncio.create_task(job44()))



async def send_logs_to_api(log_data):
    try:
        async with aiohttp.ClientSession() as session:
            url = 'http://localhost:8080/api/v1/logs'        
            async with session.post(url, json=log_data) as response:
                response_text = await response.text()
               
    except Exception as e:
        print(e)



       
        
        

@app.on_message(filters.private)
async def auto_reply(client, message):
    otvet = 'Я тут @BotLab_dev'
    
    count = await app.search_messages_count(message.chat.id)
    if count<=2:
        await app.send_chat_action(message.chat.id, enums.ChatAction.TYPING)
        print(count)
        await asyncio.sleep(1)
        await client.send_message(message.chat.id, otvet)
    

async def run_app():
    # await db_start()
    async with app:
        while True:
            await asyncio.sleep(1)
            schedule.run_pending()

if __name__ == '__main__':
    # Schedule job1 to run every minute at the 17th second
    print('bot started')
    loop = asyncio.get_event_loop()
    loop.run_until_complete(run_app())
