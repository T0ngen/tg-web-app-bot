from aiogram.types import WebAppInfo, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup


main_menu_kb = [
    [InlineKeyboardButton(text='Запустить', web_app=WebAppInfo(url='https://cheery-liger-03f576.netlify.app/')),],
    [InlineKeyboardButton(text='🌐Канал Кодера', url='https://t.me/+HEthaQBv2O40Mjhi'),
                 InlineKeyboardButton(text='ℹ️Отзывы', url='https://t.me/Bot_Labbs')],
                [InlineKeyboardButton(text='👨‍💻Заказать Проект', url='https://t.me/BotLab_dev')],
                ]
main_menu = InlineKeyboardMarkup(inline_keyboard=main_menu_kb )


main_menu_kb2 = [
   
                 [KeyboardButton(text='👤Профиль'),
                KeyboardButton(text='👁‍🗨Информация')],
                ]
main_menu2 = ReplyKeyboardMarkup(keyboard=main_menu_kb2, resize_keyboard=True)


main_menu_kb3 = [[InlineKeyboardButton(text='🌐Канал Кодера', url='https://t.me/+HEthaQBv2O40Mjhi'),
                 InlineKeyboardButton(text='ℹ️Отзывы', url='https://t.me/Bot_Labbs')],
                [InlineKeyboardButton(text='👨‍💻Заказать Проект', url='https://t.me/BotLab_dev')],
                [InlineKeyboardButton(text='📃Правила', callback_data='rules')],
                [InlineKeyboardButton(text='❌Закрыть', callback_data='deletemessage'),]
                ]

main_menu3 = InlineKeyboardMarkup(inline_keyboard=main_menu_kb3 )


back_to_info = [[InlineKeyboardButton(text='Назад', callback_data='backinfo')]]

back_to_info_kb = InlineKeyboardMarkup(inline_keyboard=back_to_info )


catalog = [[InlineKeyboardButton(text='🤖Боты', callback_data ='shop;bots'),
           InlineKeyboardButton(text='🌐Сайты', callback_data='shop;sites')],
                
                [InlineKeyboardButton(text='❌Закрыть', callback_data='deletemessage')],
                ]
catalog_kb = InlineKeyboardMarkup(inline_keyboard=catalog )


async def topup_balance():
    kb = []
    kb.append([InlineKeyboardButton(text="Cryptobot", callback_data="botcurrencies")])
    kb.append([InlineKeyboardButton(text='❌Закрыть', callback_data='deletemessage')])
    keyboard = InlineKeyboardMarkup(inline_keyboard=kb)
    return keyboard


async def check_crypto_bot_kb(url: str, invoice_hash: int):
    markup = InlineKeyboardMarkup(
        inline_keyboard=[
            [
                InlineKeyboardButton(
                    text='🔗 Оплатить',
                    url=url
                )
            ],
            [
                InlineKeyboardButton(
                    text='♻️ Проверить оплату',
                    callback_data=f'check_crypto_bot|{invoice_hash}'
                )
            ]
        ]
    )
    return markup

back_to_add_balance_kb = InlineKeyboardMarkup(
    inline_keyboard=[
        [
            InlineKeyboardButton(
                text='⬅ Назад',
                callback_data='main_menu'
            )
        ]
    ]
)

async def crypto_bot_currencies_kb():
    currencies = ['USDT', 'BUSD', 'USDC', 'BTC', 'ETH', 'TON', 'BNB']
    kb = []
    for currency in currencies:
        kb.append([InlineKeyboardButton(text=currency, callback_data=f'crypto_bot_currency|{currency}')])
    kb.append([InlineKeyboardButton(text='❌ Отменить действие', callback_data='main_menu')])
    keyboard = InlineKeyboardMarkup(inline_keyboard=kb, row_width=3)
    return keyboard
