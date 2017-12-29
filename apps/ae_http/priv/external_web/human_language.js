var language_mode;
(function () {
    var x = window.location.href;
    var l = x.slice(-3);
    if (l == "?en") {
        language_mode = "en";//english
    } else if (l == "?cn") {
        language_mode = "cn";//simplified chinese
    } else if (l == "?hi") {
        language_mode = "hi";//hindi
    } else if (l == "?tp") {
        language_mode = "tp";//toki pona
    } else if (l == "?ar") {
        language_mode = "ar";//arabic
    } else if ((l == "?sp") || (l == "?es")) {
        language_mode = "sp";//spanish
    } else if (l == "tml" ) {
        language_mode = "en";//default is english
    } else {
        console.log("language selection error. ");
        console.log(l);
        console.log("is not a valid language selection");
        language_mode = "en";//still default to english
    }
})();
function human_language() {
    return {"amoveo": {cn: "易币",
                       en: "Amoveo ",
                       sp: "Amoveo ",
                       tp: "mani kon Amoveo ",
                       hi: "आहमोवीओह",
                       ar: "Amoveo"},
            "light_title": {cn: "轻钱包-",
                            en: "Light Wallet-",
                            tp: "poki lili pi ",
                            sp: "Billetera Ligera ",
                            hi: "प्रकाश बटुआ",
                            ar: "ضوء المحفظة"},
            "home_page": {cn: "主页",
                          en: "home page ",
                          tp: "lipu insa",
                          sp: "página de inicio",
                          hi: "मुख पृष्ठ",
                          ar: "الصفحة الرئيسية"},
            "discuss_on_reddit": {cn: "在 reddit 上讨论",
                                  en: "discuss on reddit",
                                  tp: "kulupu Reddit",
                                  sp: "debatir en reddit",
                                  hi: "reddit पर चर्चा",
                                  ar: "مناقشة على رديت"},
            "blockchain": {cn: "区块链",
                           en: "blockchain ",
                           tp: "mani sin",
                           sp: "cadena de bloques ",
                           hi: "क्रिप्टोग्राफिक धन",
                           ar: "عملة التشفير"},
            "account": {cn: "帐户",
                        en: "account ",
                        tp: "ilo jo mani",
                        sp: "cuenta ",
                        hi: "लेखा",
                        ar: "الحساب"},
            "channel": {cn: "通道",
                        en: "channel ",
                        tp: "ilo tu mani",
                        sp: "canal ",
                        hi: "चैनल",
                        ar: "قناة"},
            "ip": {cn: "IP",
                   en: "IP",
                   tp: "nanpa suli",
                   sp: "IP",
                   hi: "आईपी",
                   ar: "إب"},
            "channel_node": {cn: "通道节点",
                             en: "channel node ",
                             tp: "jan pi ilo tu mani ",
                             sp: "servidor de canales ",
                             hi: "चैनल सर्वर",
                             ar: "الخادم قناة"},
            "port": {cn: "端口",
                     en: "port",
                     tp: "nanpa lili",
                     sp: "puerto",
                     hi: "बंदरगाह",
                     ar: "منفذ"},
            "market": {cn: "市场",
                       en: "market ",
                       tp: "esun",
                       sp: "mercado",
                       hi: "बाजार",
                       ar: "سوق"},
            "open_order": {cn: "未成交订单",
                           en: "unmatched order ",
                           tp: "wile ??",
                           sp: "orden de compra ",
                           hi: "बेमिसाल खरीदारी",
                           ar: "شراء لا مثيل لها"},
            "amount": {cn: "数量",
                       en: "amount ",
                       tp: "mute kama jo",
                       sp: "cantidad ",
                       hi: "रकम",
                       ar: "كمية"},
            "price": {cn: "价格",
                      en: "price",
                      tp: "mute kama pana",
                      sp: "precio",
                      hi: "मूल्य",
                      ar: "السعر"},
            "amount_send": {cn: "要发送的数量",
                            en: "amount to send",
                            tp: "mute pana",
                            sp: "cantidad a enviar",
                            hi: "भेजी जाने वाली राशि",
                            ar: "المبلغ لإرسال"},
            "spend": {cn: "发送",
                      en: "spend",
                      tp: "pana",
                      sp: "enviar",
                      hi: "बिताना",
                      ar: "أنفق"},
            "true": {cn: "真正",//既不是
                     en: "true ",
                     tp: "lon",
                     sp: "cierto ",
                     hi: "सच",
                     ar: "صحيح"},
            "false": {cn: "假",//也不是
                      en: "false ",
                      tp: "lon ala",
                      sp: "falso",
                      hi: "असत्य",
                      ar: "خاطئة"},
            "win_if": {cn: "获胜条件",
                       en: "you win if the outcome is ",
                       tp: "ni lon la sina jo mute: ",
                       sp: "usted ganará si el resultado es ",
                       hi: "जीतने वाली स्थिति",
                       ar: "الفوز الشروط"},
            "cancel": {cn: "取消",
                       en: "cancel ",
                       tp: "wile ala",
                       sp: "cancelar ",
                       hi: "रद्द करना",
                       ar: "إلغاء"},
            "continue": {cn: "继续",
                         en: "continue",
                         tp: "wile",
                         sp: "continuar",
                         hi: "जारी रहना",
                         ar: "استمر"},
            "contract": {cn: "贸易",
                         en: "trade ",
                         tp: "pana en kama jo ",
                         sp: "intercambio ",
                         hi: "विनिमय अनुबंध",
                         ar: "تبادل"},
            "save_channel": {cn: "保存通道数据到文件",
                             en: "save channel data to file",
                             tp: "o jo ilo tu mani",
                             sp: "guardar datos del canal en fichero",
                             hi: "चैनल को फाइल में सहेजना",
                             ar: "حفظ بيانات القناة إلى ملف"},
            "channel_state": {cn: "通道状态",
                              en: "channel state ",
                              tp: "toki pi ilo tu mani",
                              sp: "estado del canal ",
                              hi: "चैनल डेटा",
                              ar: "بيانات القناة"},
            "channel_warn": {cn: "通道状态需要保存!~~~~~~~",
                             en: "channel state needs to be saved!~~~~~~~~~ ",
                             tp: "sina wile ala pakala. o jo toki pi ilo tu mani ~~~~~~~~~~~",
                             sp: "necesitas guardar los datos del canal!~~~~~~~~~~~",
                             hi: "चैनल डेटा को सहेजना होगा ~~~~~~~~~~",
                             ar: "يجب حفظ بيانات القناة ~~~~~~~~"},
            "save_confirm": {cn: "通道状态已保存",
                             en: "channel state is saved.",
                             tp: "kama pini la sina jo toki pi ilo tu mani",
                             sp: "los datos del canal se guardaron correctamente.",
                             hi: "चैनल डेटा सहेजा जाता है",
                             ar: "يتم حفظ بيانات القناة"},
            "make_channel": {cn: "创建通道",
                             en: "make channel ",
                             tp: "kama la ilo pi tu mani",
                             sp: "crear un canal ",
                             hi: "चैनल बनाओ",
                             ar: "جعل القناة"},
            "amount_channel": {cn: "锁定在通道中的数量",
                               en: "amount to lock in channel ",
                               tp: "mute pana e ilo pi tu mani",
                               sp: "cantidad a bloquear en el canal ",
                               hi: "चैनल में डाल करने के लिए राशि",
                               ar: "مقدار لقفل في القناة"},
            "channel_delay": {cn: "通道延迟(在区块)",
                              en: "channel delay (in blocks) ",
                              tp: "mute tenpo pipi e ilo pi tu mani",
                              sp: "retraso del canal (en bloques) ",
                              hi: "चैनल विलंब (ब्लॉक में)",
                              ar: "تأخير القناة (في كتل)"},
            "unknown": {cn: "未知",
                        en: "unknown ",
                        tp: "sona ala",
                        sp: "desconocido ",
                        hi: "अनजान",
                        ar: "غير معروف"},
            "your_balance": {cn: "账户余额",
                             en: "your balance ",
                             tp: "sina jo ",
                             sp: "cuantos tienes ",
                             hi: "आपका संतुलन",
                             ar: "مبلغ المال لديك"},
            "server_balance": {cn: "服务器余额",
                               en: "server balance",
                               tp: "ona jo",
                               sp: "saldo del servidor ",
                               hi: "सर्वर बैलेंस",
                               ar: "خادم التوازن"},
            "check_channel": {cn: "检查账户余额",
                              en: "check channel balance",
                              tp: "o toki e mute jo",
                              sp: "comprobar saldo del canal",
                              hi: "चैनल संतुलन का निरीक्षण करना",
                              ar: "تحقق من توازن القناة"},
            "markets": {cn: "市场",
                        en: "markets",
                        tp: "esun mute",
                        sp: "mercados",
                        hi: "बाजार",
                        ar: "الأسواق"},
            "markets_link": {cn: "可以在下边查看可用的市场",
                             en: "see the available markets here ",
                             tp: "ni ken lukin e esun mute",
                             sp: "ver mercados disponibles ",
                             hi: "यहां उपलब्ध बाजार देखें",
                             ar: "انظر الأسواق المتاحة هنا"},
            "trade_type": {cn: "贸易类型",
                           en: "trade type",
                           tp: "lon ala lon",
                           sp: "tipo de intercambio",
                           hi: "व्यापार प्रकार",
                           ar: "نوع التجارة"},
            "make_bet": {cn: "打个赌",
                         en: "make bet ",
                         tp: "pali e ??",
                         sp: "hacer apuesta ",
                         hi: "शर्त बनाना",
                         ar: "جعل الرهان"},
            "finalize_bets": {cn: "检查是否有赌局已经完成",
                              en: "check if any bets have been settled",
                              tp: "lukin e ?? pini",
                              sp: "comprobar si se han saldado apuestas",
                              hi: "जांचें कि क्या कोई दांव तय हो चुका है",
                              ar: "تحقق ما إذا كان قد تم تسوية أي رهانات"},
            "gather_bets": {cn: "汇集赌注",
                            en: "combine bets in opposite directions to recover money from the market ",
                            tp: "alasa e ??",
                            sp: "combinar apuestas en direcciones contrarias para recuperar dinero del mercado ",
                            hi: "पैसे अनलॉक करने के लिए दांव जुटाएं",
                            ar: "الجمع بين الرهانات لاسترداد الأموال من السوق"},
            "refresh_bets": {cn: "更新链下资产余额",
                             en: "update balance of off-chain assets ",
                             tp: "lukin e ?? sin",
                             sp: "actualizar saldo de activos fuera de la cadena ",
                             hi: "परिसंपत्तियों का संतुलन अद्यतन करें",
                             ar: "تحديث رصيد أصول القناة"},
            "create_account": {cn: "创建新帐号",
                               en: "create account ",
                               tp: "pali e ilo jo mani ",
                               sp: "crear una cuenta ",
                               hi: "खाता बनाएं",
                               ar: "إصنع حساب"},
            "initial_balance": {cn: "初始化余额",
                                en: "initial balance",
                                tp: "pana mute mani",
                                sp: "saldo inicial",
                                hi: "प्रारंभिक संतुलन",
                                ar: "الرصيد الافتتاحي"},
            "more_headers": {cn: "获取更多的头信息",
                             en: "get more headers",
                             tp: "alasa toki Amoveo",
                             sp: "actualizar cabeceras",
                             hi: "अधिक शीर्षलेख डाउनलोड करें",
                             ar: "الحصول على المزيد من البيانات كريبتوكيرنسي"},
            "height": {cn: "高度",
                       en: "height ",
                       tp: "nanpa suli",
                       sp: "altura",
                       hi: "ऊंचाई",
                       ar: "ارتفاع"},
            "total_work": {cn: "总工作量",
                           en: "total work",
                           tp: "pali",
                           sp: "trabajo hecho",
                           hi: "काम",
                           ar: "عمل"},
            "private_key": {cn: "私钥",
                            en: "private key",
                            tp: "nanpa sina sina",
                            sp: "clave privada",
                            hi: "गुप्त कुंजी",
                            ar: "مفتاح سري"},
            "save_key": {cn: "保存私钥到文件",
                         en: "save private key to file",
                         tp: "jo e poki",
                         sp: "guardar la clave privada a un archivo",
                         hi: "अपनी गुप्त कुंजी को किसी फ़ाइल में सहेज सकते हैं",
                         ar: "حفظ المفتاح السري إلى ملف"},
            "get_key": {cn: "从文件中读取密钥",
                        en: "get key from file ",
                        tp: "alasa e poki",
                        sp: "cargar clave desde archivo ",
                        hi: "फ़ाइल से कुंजी प्राप्त करें",
                        ar: "الحصول على مفتاح من الملف"},
            "make_key": {cn: "生成新的密钥对",
                         en: "generate new keys ",
                         tp: "o pali poki sin",
                         sp: "generar nuevas claves ",
                         hi: "कुंजी बनाएं",
                         ar: "جعل المفتاح"},
            "check_balance": {cn: "检查余额",
                              en: "check balance ",
                              tp: "o lukin mute mani",
                              sp: "comprovar saldo ",
                              hi: "बकाया जाँचो",
                              ar: "تحقق التوازن"},
            "your_pubkey": {cn: "你的公钥",
                            en: "your pubkey ",
                            tp: "nimi sina",
                            sp: "su clave pública ",
                            hi: "आपकी सार्वजनिक कुंजी",
                            ar: "المفتاح العام"},
            "to_pubkey": {cn: "往公钥地",
                          en: "to pubkey",
                          tp: "pana e poki",
                          sp: "a la clave pública",
                          hi: "इस सार्वजनिक कुंजी के लिए",
                          ar: "إلى هذا المفتاح العمومي"},
            "key_warning": {cn: "这将会删除旧的密钥对. 其中的余额也将被删除",
                            en: "This will delete your old keys. If money is sent to them, it will be deleted.",
                            tp: "kama la ni li pakala e poki",
                            sp: "Esto borrará tus antiguas claves. Si recibe dinero en ellas en el futuro, lo perderá.",
                            hi: "यह ब्राउज़र से आपकी कुंजी को हटा देगा। पहले सहेजें",
                            ar: "यह ब्राउज़र से आपकी पुरानी कुंजी को हटा देगा। पहले बचाओ"},
            "stop_mining": {cn: "停止挖矿",
                            en: "stop mining",
                            tp: "o pini alasa mani",
                            sp: "dejar de minar",
                            hi: "खनन बंद करो",
                            ar: "وقف التعدين"},
            "start_mining": {cn: "开始挖矿 (注意: 使用电脑或者笔记本, 不要用手机. 想要持续挖矿的话页面不能关闭)",
                             en: "start mining (warning: use a laptop or computer, not a phone.)(warning: you may need to leave tab open to continue mining.)",
                             tp: "o alasa mani. ",
                             sp: "comenzar de minar (aviso: usar sólo desde un portátil o computadora, no un teléfono móvil.)(aviso: necesitará dejar la pestaña abierta para continuar minando.",
                             hi: "खनन शुरू करना (चेतावनी, एक कंप्यूटर की ज़रूरत है, कोई फोन नहीं है)",
                             ar: "بدء التعدين"},
            "blocks_found": {cn: "区块奖励",
                             en: "blocks found",
                             tp: "pini la alasa e mute nanpa ",
                             sp: "bloques encontrados",
                             hi: "ब्लॉक मिला",
                             ar: "كتل وجدت"},
            "refresh_channels_interfaces_button":
            {cn: "??",
             en: "refresh channels interfaces. Useful if you switch channel servers",
             tp: "??",
             sp: "??",
             hi: "??",
             ar: "??"},
            "channel_lifespan": {cn: "??",
                                 en: "how long should the channel last? In blocks. Longer costs more.",
                                 tp: "??",
                                 sp: "??",
                                 hi: "??",
                                 ar: "??"},
            "time_value": {cn: "??",
                           en: "It costs this much to keep a channel open. per block per coin",
                           tp: "??",
                           sp: "??",
                           hi: "??",
                           ar: "??"}
           };
}
var language_object = human_language();
function get_words (x) {
    return language_object[x][language_mode];
}
