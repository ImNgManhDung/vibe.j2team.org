import type { Region } from './types'

export const regions: Region[] = [
  {
    id: 'tay-bac',
    name: 'Tây Bắc',
    nameShort: 'TB',
    color: '#FF6B4A',
    description:
      'Vùng núi non hùng vĩ với nền ẩm thực đậm đà bản sắc dân tộc — cách nấu thô mộc, tận dụng hương vị tự nhiên từ rừng núi.',
    markerX: 60,
    markerY: 105,
    dishes: [
      {
        name: 'Thắng cố',
        emoji: '🫕',
        description:
          'Món súp nội tạng ngựa/bò thơm nồng mùi thảo quả, hồi, quế — linh hồn ẩm thực chợ phiên vùng cao.',
        origin: 'Hà Giang',
        places: [
          { name: 'Chợ phiên Đồng Văn', address: 'TT. Đồng Văn, Hà Giang' },
          { name: 'Quán Thắng Cố A Phủ', address: 'Đường Lũng Cú, Đồng Văn' },
        ],
      },
      {
        name: 'Cơm lam',
        emoji: '🎋',
        description:
          'Gạo nếp nương nhồi trong ống tre non, nướng trên than hồng — hương thơm tre quyện với nếp dẻo.',
        origin: 'Sơn La',
      },
      {
        name: 'Pa pỉnh tộp',
        emoji: '🐟',
        description:
          'Cá suối gập đôi, ướp mắc khén và rau thơm rừng, nướng trên than — đặc sản người Thái.',
        origin: 'Điện Biên',
      },
      {
        name: 'Xôi ngũ sắc',
        emoji: '🍚',
        description:
          'Xôi nhuộm 5 màu từ lá cây rừng tự nhiên — đỏ, vàng, tím, xanh, trắng — đẹp mắt và thơm nức.',
        origin: 'Lai Châu',
      },
      {
        name: 'Nậm pịa',
        emoji: '🥘',
        description:
          'Món canh nội tạng nấu với rau rừng, đặc trưng mùi vị riêng — thử thách vị giác nhưng nghiện không rời.',
        origin: 'Sơn La',
      },
      {
        name: 'Thịt trâu gác bếp',
        emoji: '🥩',
        description:
          'Thịt trâu ướp gia vị truyền thống, hun khói trên bếp củi — dai ngọt, thơm lừng khói.',
        origin: 'Hà Giang',
      },
      {
        name: 'Thắng dền',
        emoji: '🟤',
        description:
          'Viên bột nếp nhân đậu xanh/vừng đen luộc trong nước đường gừng — ấm bụng đêm đông Sa Pa.',
        origin: 'Lào Cai',
      },
      {
        name: 'Lợn cắp nách',
        emoji: '🐖',
        description:
          'Lợn bản nhỏ nuôi thả rông, quay hoặc nướng thơm lừng — thịt chắc ngọt, da giòn rụm.',
        origin: 'Lào Cai',
      },
      {
        name: 'Cốm Tú Lệ',
        emoji: '🌾',
        description:
          'Cốm nếp Tú Lệ dẻo thơm nức tiếng — giã tay truyền thống, ăn kèm chuối chín.',
        origin: 'Yên Bái',
      },
      {
        name: 'Cá nướng Hoà Bình',
        emoji: '🐠',
        description:
          'Cá suối tươi kẹp tre nướng than hồng, ướp sả ớt mắc khén — hương vị sông Đà.',
        origin: 'Hoà Bình',
      },
    ],
  },
  {
    id: 'dong-bac',
    name: 'Đông Bắc',
    nameShort: 'ĐB',
    color: '#FFB830',
    description:
      'Vùng biên giới phía Bắc với khí hậu se lạnh — ẩm thực tinh tế, nhiều món bánh và nước chấm đặc trưng.',
    markerX: 208,
    markerY: 65,
    dishes: [
      {
        name: 'Phở chua',
        emoji: '🍜',
        description:
          'Phở tươi trộn với thịt vịt quay, gan, lạp xưởng, rau thơm và nước sốt chua ngọt — khác biệt hoàn toàn với phở Hà Nội.',
        origin: 'Lạng Sơn',
        places: [
          { name: 'Phở Chua Bà Nho', address: '37 Trần Đăng Ninh, Lạng Sơn' },
        ],
      },
      {
        name: 'Bánh cuốn trứng',
        emoji: '🥟',
        description:
          'Bánh cuốn tráng mỏng với trứng gà nguyên quả bên trong — ăn kèm nước mắm pha và hành phi.',
        origin: 'Cao Bằng',
      },
      {
        name: 'Khâu nhục',
        emoji: '🍖',
        description:
          'Thịt ba chỉ hầm nhừ với khoai môn, nấm hương, gia vị Tàu — tan trong miệng, ngọt đậm.',
        origin: 'Lạng Sơn',
        places: [
          { name: 'Nhà hàng Hữu Nghị', address: '20 Lê Lợi, TP. Lạng Sơn' },
        ],
      },
      {
        name: 'Cháo ấu tẩu',
        emoji: '🥣',
        description:
          'Cháo nấu từ củ ấu tẩu (có độc phải chế biến đặc biệt) — giải cảm, giữ ấm cơ thể trong ngày đông lạnh giá.',
        origin: 'Hà Giang',
      },
      {
        name: 'Vịt quay Lạng Sơn',
        emoji: '🦆',
        description:
          'Vịt quay da giòn rụm, thịt mềm thấm vị ngũ vị hương — ăn kèm nước mắm pha gừng tuyệt hảo.',
        origin: 'Lạng Sơn',
      },
      {
        name: 'Bánh coốc mò',
        emoji: '🍡',
        description:
          'Bánh bột gạo hình nón nhỏ, ăn với nước xương, hành phi — giản dị mà tinh tế.',
        origin: 'Thái Nguyên',
      },
      {
        name: 'Chả mực Hạ Long',
        emoji: '🦑',
        description:
          'Mực tươi giã tay dai giòn, chiên vàng rụm — đặc sản vùng Vịnh, ăn kèm tương ớt.',
        origin: 'Quảng Ninh',
        places: [
          { name: 'Chả Mực Bà Kiều', address: 'Chợ Hạ Long 1, TP. Hạ Long' },
        ],
      },
      {
        name: 'Bánh đa cua',
        emoji: '🦀',
        description:
          'Bánh đa đỏ với nước cua đồng ngọt thanh, rau muống, chả lá lốt — hương vị đồng quê.',
        origin: 'Bắc Giang',
      },
      {
        name: 'Thịt trâu lá lồm',
        emoji: '🌿',
        description:
          'Thịt trâu xào với lá lồm chua dịu tự nhiên — món ăn dân dã vùng Chiêm Hoá.',
        origin: 'Tuyên Quang',
      },
      {
        name: 'Cá thính Phú Thọ',
        emoji: '🐟',
        description:
          'Cá lăng ướp thính gạo rang, lên men tự nhiên — vị chua dịu, thơm nồng đất Tổ.',
        origin: 'Phú Thọ',
      },
      {
        name: 'Miến dong Bắc Kạn',
        emoji: '🍝',
        description:
          'Miến từ bột dong riềng nguyên chất — sợi dai mềm, nấu với gà bản thơm ngọt.',
        origin: 'Bắc Kạn',
      },
    ],
  },
  {
    id: 'dong-bang-bac-bo',
    name: 'Đồng bằng Bắc Bộ',
    nameShort: 'ĐB-BB',
    color: '#38BDF8',
    description:
      'Trung tâm ẩm thực nghìn năm văn hiến — tinh tế, thanh đạm, cầu kỳ trong cách chế biến và trình bày.',
    markerX: 200,
    markerY: 150,
    dishes: [
      {
        name: 'Phở Hà Nội',
        emoji: '🍲',
        description:
          'Nước dùng trong vắt, ngọt thanh từ xương bò hầm, bánh phở mềm, thịt bò tái chín — biểu tượng ẩm thực Việt Nam.',
        origin: 'Hà Nội',
        places: [
          { name: 'Phở Thìn Bờ Hồ', address: '13 Lò Đúc, Hai Bà Trưng, Hà Nội' },
          { name: 'Phở Bát Đàn', address: '49 Bát Đàn, Hoàn Kiếm, Hà Nội' },
          { name: 'Phở 10 Lý Quốc Sư', address: '10 Lý Quốc Sư, Hoàn Kiếm' },
        ],
      },
      {
        name: 'Bún chả',
        emoji: '🥩',
        description:
          'Chả thịt lợn nướng than hoa ăn với bún tươi, rau sống và nước mắm pha chua ngọt — từng được Obama thưởng thức.',
        origin: 'Hà Nội',
        places: [
          { name: 'Bún Chả Hương Liên', address: '24 Lê Văn Hưu, Hai Bà Trưng (quán Obama)' },
          { name: 'Bún Chả Đắc Kim', address: '1 Hàng Mành, Hoàn Kiếm' },
        ],
      },
      {
        name: 'Bún đậu mắm tôm',
        emoji: '🫘',
        description:
          'Đậu phụ rán giòn, bún lạ, chả cốm, nem chua — tất cả chấm mắm tôm sủi bọt chanh ớt.',
        origin: 'Hà Nội',
        places: [
          { name: 'Bún Đậu Hàng Khay', address: '35B Hàng Khay, Hoàn Kiếm' },
        ],
      },
      {
        name: 'Bánh cuốn Thanh Trì',
        emoji: '🫓',
        description:
          'Bánh cuốn mỏng tang, trong veo, nhân hành phi — chấm nước mắm cà cuống thơm nức mũi.',
        origin: 'Hà Nội',
      },
      {
        name: 'Chả cá Lã Vọng',
        emoji: '🐟',
        description:
          'Cá lăng tẩm nghệ nướng/chiên, ăn với bún, rau thì là, hành, mắm tôm — tinh hoa phố cổ Hà Nội.',
        origin: 'Hà Nội',
        places: [
          { name: 'Chả Cá Lã Vọng', address: '14 Chả Cá, Hoàn Kiếm, Hà Nội' },
          { name: 'Chả Cá Thăng Long', address: '19-21-31 Đường Thành, Hoàn Kiếm' },
        ],
      },
      {
        name: 'Bánh cốm',
        emoji: '🍵',
        description:
          'Bánh từ cốm non Vòng, nhân đậu xanh, dừa — ngọt thanh, thơm hương đồng nội.',
        origin: 'Hà Nội',
      },
      {
        name: 'Nem cua bể',
        emoji: '🦀',
        description:
          'Nem cuốn nhân thịt cua biển rán giòn vàng — dùng nóng chấm nước mắm pha.',
        origin: 'Hải Phòng',
        places: [
          { name: 'Nhà hàng Văn Cú', address: '4 Hoàng Văn Thụ, Lê Chân, Hải Phòng' },
        ],
      },
      {
        name: 'Phở bò Nam Định',
        emoji: '🍲',
        description:
          'Phở nước trong, sợi nhỏ mềm, thịt bò chín tái — phong cách gốc phở Việt truyền thống.',
        origin: 'Nam Định',
        places: [
          { name: 'Phở Cụ Tặng', address: 'Chợ Rồng, TP. Nam Định' },
        ],
      },
      {
        name: 'Cơm cháy Ninh Bình',
        emoji: '🍘',
        description:
          'Cơm tráng mỏng chiên giòn rụm, rưới nước sốt thịt dê hoặc tôm — giòn tan thơm béo.',
        origin: 'Ninh Bình',
        places: [
          { name: 'Nhà hàng Trung Tuyết', address: 'Tràng An, Ninh Bình' },
        ],
      },
      {
        name: 'Bánh đậu xanh',
        emoji: '🟡',
        description:
          'Bánh đậu xanh mịn tan trong miệng — hương thơm bơ nhẹ, đặc sản bách niên gia truyền.',
        origin: 'Hải Dương',
      },
      {
        name: 'Canh cá Thái Bình',
        emoji: '🐟',
        description:
          'Cá lóc nấu nước dừa với rau cải cúc, hành tươi — thanh ngọt tự nhiên đồng quê.',
        origin: 'Thái Bình',
      },
      {
        name: 'Bánh phu thê',
        emoji: '🍮',
        description:
          'Bánh bột sắn nhân đậu xanh dừa, gói lá dong — biểu tượng hạnh phúc lứa đôi.',
        origin: 'Bắc Ninh',
      },
      {
        name: 'Cá kho làng Vũ Đại',
        emoji: '🏺',
        description:
          'Cá trắm đen kho niêu đất với riềng, nước hàng — kho 16 tiếng lửa nhỏ, cá chín nhừ xương.',
        origin: 'Hà Nam',
        places: [
          { name: 'HTX Cá Kho Đại Hoàng', address: 'Xã Hoà Hậu, Lý Nhân, Hà Nam' },
        ],
      },
      {
        name: 'Chả gà Tiên Yên',
        emoji: '🍗',
        description:
          'Thịt gà đồi giã mịn, nêm gia vị vừa, hấp hoặc chiên — dai ngọt đặc trưng.',
        origin: 'Quảng Ninh',
      },
    ],
  },
  {
    id: 'bac-trung-bo',
    name: 'Bắc Trung Bộ',
    nameShort: 'BTB',
    color: '#FF6B4A',
    description:
      'Vùng đất cố đô Huế — ẩm thực cung đình tinh xảo, hài hoà âm dương, nổi tiếng nhiều loại bánh và bún.',
    markerX: 200,
    markerY: 310,
    dishes: [
      {
        name: 'Bún bò Huế',
        emoji: '🍜',
        description:
          'Nước dùng đỏ hồng cay nồng sả ớt, giò heo, bò tái bắp, chả cua — đậm đà xứ Huế.',
        origin: 'Huế',
        places: [
          { name: 'Bún bò Huế O Phượng', address: '07 Nguyễn Biểu, TP. Huế' },
          { name: 'Bún bò Mụ Rơi', address: '11 Phạm Hồng Thái, TP. Huế' },
        ],
      },
      {
        name: 'Bánh bèo chén',
        emoji: '🍥',
        description:
          'Bánh bột gạo mỏng đựng trong chén nhỏ, rắc tôm chấy, hành phi — một trong bộ bánh Huế nổi tiếng.',
        origin: 'Huế',
      },
      {
        name: 'Cơm hến',
        emoji: '🐚',
        description:
          'Cơm nguội trộn hến xào, rau sống, lạc rang, ớt tương — bình dân nhưng hương vị khó quên.',
        origin: 'Huế',
        places: [
          { name: 'Cơm hến Bà Oanh', address: '6 Trương Định, TP. Huế' },
        ],
      },
      {
        name: 'Cháo lươn',
        emoji: '🐍',
        description:
          'Lươn xào sả nghệ ăn cùng cháo nóng, hành phi, rau mùi — bổ dưỡng và thơm lừng.',
        origin: 'Nghệ An',
        places: [
          { name: 'Cháo lươn Bà Béo', address: '134 Nguyễn Văn Cừ, TP. Vinh' },
        ],
      },
      {
        name: 'Bánh nậm',
        emoji: '🍃',
        description:
          'Bánh bột gạo mỏng gói lá chuối, nhân tôm/thịt — thanh nhã, ăn kèm nước mắm ngọt.',
        origin: 'Huế',
      },
      {
        name: 'Bánh khoái',
        emoji: '🥞',
        description:
          'Bánh giòn vàng nhân tôm thịt giá, dùng với nước chấm lạc đặc sánh — bản sắc ẩm thực Huế.',
        origin: 'Huế',
        places: [
          { name: 'Bánh khoái Hạnh', address: '11 Phạm Hồng Thái, TP. Huế' },
        ],
      },
      {
        name: 'Nem chua Thanh Hoá',
        emoji: '🟢',
        description:
          'Thịt lợn sống lên men tự nhiên cuốn lá chuối — chua thanh, giòn sần sật, ăn kèm tỏi ớt.',
        origin: 'Thanh Hoá',
        places: [
          { name: 'Nem chua Bà Ích', address: 'Chợ Tây Thành, TP. Thanh Hoá' },
        ],
      },
      {
        name: 'Bánh cuốn Thanh Hoá',
        emoji: '🥟',
        description:
          'Bánh cuốn nhân tôm thịt cuốn tay, chấm nước mắm cua — khác biệt vùng xứ Thanh.',
        origin: 'Thanh Hoá',
      },
      {
        name: 'Cu đơ Hà Tĩnh',
        emoji: '🥜',
        description:
          'Kẹo lạc mật mía kẹp bánh tráng mỏng — giòn rụm ngọt bùi, đặc sản quà quê.',
        origin: 'Hà Tĩnh',
      },
      {
        name: 'Cháo canh Quảng Bình',
        emoji: '🥣',
        description:
          'Bún tươi ăn với nước canh xương hầm ngọt thanh, tôm, hến — hương vị bình dị xứ Quảng.',
        origin: 'Quảng Bình',
      },
      {
        name: 'Bánh ướt thịt nướng',
        emoji: '🫓',
        description:
          'Bánh ướt mỏng mềm cuốn thịt nướng, rau sống chấm nước lèo — hương vị đường phố xứ Huế.',
        origin: 'Quảng Trị',
      },
    ],
  },
  {
    id: 'nam-trung-bo',
    name: 'Nam Trung Bộ',
    nameShort: 'NTB',
    color: '#FFB830',
    description:
      'Vùng ven biển miền Trung nắng gió — ẩm thực kết hợp sản vật biển và đồng bằng, đậm đà gia vị.',
    markerX: 340,
    markerY: 480,
    dishes: [
      {
        name: 'Mì Quảng',
        emoji: '🍝',
        description:
          'Mì sợi vàng từ bột nghệ, nước lèo sánh ít, tôm thịt, rau sống, bánh tráng — tinh hoa Quảng Nam.',
        origin: 'Quảng Nam',
        places: [
          { name: 'Mì Quảng Bà Mua', address: '95 Trần Bình Trọng, Tam Kỳ' },
          { name: 'Mì Quảng Ông Hai', address: '2 Trần Cao Vân, TP. Đà Nẵng' },
        ],
      },
      {
        name: 'Cao lầu',
        emoji: '🥡',
        description:
          'Mì sợi dày dai giòn, thịt xá xíu, rau sống — chỉ ngon đúng vị khi dùng nước giếng Bá Lễ, Hội An.',
        origin: 'Hội An',
        places: [
          { name: 'Cao Lầu Thanh', address: '26 Thái Phiên, Hội An' },
        ],
      },
      {
        name: 'Bánh tráng cuốn thịt heo',
        emoji: '🌯',
        description:
          'Thịt heo luộc cuốn bánh tráng mỏng với rau sống, bún — chấm mắm nêm Đà Nẵng đặc trưng.',
        origin: 'Đà Nẵng',
        places: [
          { name: 'Bánh Tráng Trần', address: '4 Trần Bình Trọng, Hải Châu, Đà Nẵng' },
        ],
      },
      {
        name: 'Bún chả cá',
        emoji: '🐠',
        description:
          'Chả cá thác lác giòn dai trong nước dùng ngọt thanh — món sáng quen thuộc của người Nha Trang.',
        origin: 'Nha Trang',
      },
      {
        name: 'Bún cá sứa',
        emoji: '🪼',
        description:
          'Sợi bún tươi, nước dùng trong veo, sứa giòn sật, chả cá — mát lạnh ngày hè Nha Trang.',
        origin: 'Nha Trang',
      },
      {
        name: 'Nem nướng Ninh Hoà',
        emoji: '🔥',
        description:
          'Chả thịt heo nướng cuốn bánh tráng, rau sống — chấm nước sốt đặc biệt chua ngọt.',
        origin: 'Khánh Hoà',
        places: [
          { name: 'Nem Nướng Thanh Diệu', address: '98 Nguyễn Huệ, Ninh Hoà' },
        ],
      },
      {
        name: 'Don Quảng Ngãi',
        emoji: '🫕',
        description:
          'Lòng cá biển nấu thành nước sốt sánh mịn ăn kèm bánh tráng — vị biển đặc trưng hiếm nơi nào có.',
        origin: 'Quảng Ngãi',
      },
      {
        name: 'Bún chả cá Quy Nhơn',
        emoji: '🐟',
        description:
          'Chả cá thác lác dai giòn, nước dùng ngọt thanh — bún sáng lý tưởng miền biển.',
        origin: 'Bình Định',
        places: [
          { name: 'Bún Chả Cá Bà Lý', address: '107 Trần Hưng Đạo, Quy Nhơn' },
        ],
      },
      {
        name: 'Sashimi cá ngừ đại dương',
        emoji: '🍣',
        description:
          'Cá ngừ vây vàng đánh bắt xa bờ, ăn sống tươi rói — thủ phủ cá ngừ Việt Nam.',
        origin: 'Phú Yên',
        places: [
          { name: 'Nhà hàng Sông Cầu', address: 'TX. Sông Cầu, Phú Yên' },
        ],
      },
      {
        name: 'Cơm gà Ninh Thuận',
        emoji: '🍗',
        description:
          'Cơm gà nấu nước luộc thơm dịu, thịt gà ta chắc ngọt — phong cách Chăm Pa đặc sắc.',
        origin: 'Ninh Thuận',
      },
      {
        name: 'Bánh căn Phan Thiết',
        emoji: '🫓',
        description:
          'Bánh bột gạo nướng khuôn đất nung, trứng cút, mực — chấm nước mắm pha cay ngọt.',
        origin: 'Bình Thuận',
        places: [
          { name: 'Quán Bánh Căn Cô Ba', address: 'Nguyễn Huệ, Phan Thiết' },
        ],
      },
    ],
  },
  {
    id: 'tay-nguyen',
    name: 'Tây Nguyên',
    nameShort: 'TN',
    color: '#38BDF8',
    description:
      'Cao nguyên đất đỏ bazan — ẩm thực hoang dã, mộc mạc gắn với lửa, rượu cần và lễ hội cộng đồng.',
    markerX: 290,
    markerY: 570,
    dishes: [
      {
        name: 'Gà nướng bản Đôn',
        emoji: '🍗',
        description:
          'Gà thả rông ướp sả ớt, nướng trên than cây cà phê — da giòn rụm, thịt ngọt đậm vị núi rừng.',
        origin: 'Đắk Lắk',
        places: [
          { name: 'Quán Gà Nướng Bản Đôn', address: 'Bản Đôn, Buôn Đôn, Đắk Lắk' },
        ],
      },
      {
        name: 'Cơm lam gà nướng',
        emoji: '🎋',
        description:
          'Bộ đôi kinh điển Tây Nguyên — cơm nếp trong ống tre kết hợp gà nướng mắc khén.',
        origin: 'Gia Lai',
      },
      {
        name: 'Rượu cần',
        emoji: '🍺',
        description:
          'Rượu ủ từ gạo nếp/bắp trong ghè sành, uống bằng cần tre — linh hồn lễ hội cồng chiêng.',
        origin: 'Kon Tum',
      },
      {
        name: 'Phở khô Gia Lai',
        emoji: '🍜',
        description:
          'Phở trộn hành phi, thịt bò xào — ăn kèm tô nước dùng riêng, cách ăn phở độc đáo nhất Việt Nam.',
        origin: 'Gia Lai',
        places: [
          { name: 'Phở Khô Ngọc Sơn', address: '47 Nguyễn Thái Học, Pleiku' },
        ],
      },
      {
        name: 'Bò một nắng',
        emoji: '🥩',
        description:
          'Thịt bò phơi một nắng, nướng trên than hồng — dai giòn, ngọt thịt, dậy hương khói.',
        origin: 'Gia Lai',
      },
      {
        name: 'Cà phê chồn',
        emoji: '☕',
        description:
          'Hạt cà phê qua hệ tiêu hoá cầy hương, rang xay thủ công — vị đắng sâu, hương thơm đặc biệt.',
        origin: 'Đắk Lắk',
      },
      {
        name: 'Bánh tráng nướng Đà Lạt',
        emoji: '🫓',
        description:
          'Bánh tráng nướng than hoa phủ trứng, hành, bò khô, phô mai — "pizza Việt Nam" phố núi sương mù.',
        origin: 'Lâm Đồng',
        places: [
          { name: 'Chợ đêm Đà Lạt', address: 'Nguyễn Thị Minh Khai, TP. Đà Lạt' },
        ],
      },
      {
        name: 'Nem nướng Đà Lạt',
        emoji: '🍢',
        description:
          'Nem thịt nướng cuốn bánh tráng rau sống — hương vị phố núi thanh mát.',
        origin: 'Lâm Đồng',
      },
      {
        name: 'Gà nướng bản Đôn',
        emoji: '🐓',
        description:
          'Gà bản thả vườn nướng than hoa chấm muối ớt xanh — vị hoang dã Buôn Đôn.',
        origin: 'Đắk Nông',
      },
    ],
  },
  {
    id: 'dong-nam-bo',
    name: 'Đông Nam Bộ',
    nameShort: 'ĐNB',
    color: '#FF6B4A',
    description:
      'Vùng Sài Gòn sôi động — ẩm thực hội nhập, phong phú, đậm vị ngọt, nhiều street food huyền thoại.',
    markerX: 240,
    markerY: 695,
    dishes: [
      {
        name: 'Cơm tấm Sài Gòn',
        emoji: '🍚',
        description:
          'Gạo tấm dẻo tơi, sườn nướng mỡ hành, bì, chả, trứng ốp la — bữa sáng huyền thoại Sài Gòn.',
        origin: 'TP.HCM',
        places: [
          { name: 'Cơm Tấm Bụi Sài Gòn', address: '84 Nguyễn Du, Q.1, TP.HCM' },
          { name: 'Cơm Tấm Ba Ghiền', address: '84 Đặng Văn Ngữ, Phú Nhuận' },
        ],
      },
      {
        name: 'Bánh mì Sài Gòn',
        emoji: '🥖',
        description:
          'Ổ bánh mì giòn rụm kẹp pate, chả lụa, đồ chua, rau mùi — biểu tượng street food Việt Nam ra thế giới.',
        origin: 'TP.HCM',
        places: [
          { name: 'Bánh Mì Huynh Hoa', address: '26 Lê Thị Riêng, Q.1, TP.HCM' },
          { name: 'Bánh Mì Bảy Hổ', address: '14 Huỳnh Khương Ninh, Q.1' },
        ],
      },
      {
        name: 'Hủ tiếu Nam Vang',
        emoji: '🍜',
        description:
          'Sợi hủ tiếu dai trong nước dùng ngọt trong, tôm, thịt, gân — hương vị pha trộn Hoa-Việt-Khmer.',
        origin: 'TP.HCM',
      },
      {
        name: 'Gỏi cuốn',
        emoji: '🌯',
        description:
          'Bánh tráng mỏng cuốn tôm, thịt, bún, rau xanh — chấm tương đậu phộng béo ngậy, thanh mát.',
        origin: 'TP.HCM',
      },
      {
        name: 'Bò kho Sài Gòn',
        emoji: '🍛',
        description:
          'Bò hầm nhừ sốt cà chua, sả, ngũ vị hương — ăn bánh mì hoặc mì tươi, sáng nào cũng xếp hàng.',
        origin: 'TP.HCM',
        places: [
          { name: 'Bò Kho Nguyên Khang', address: '77 Lý Tự Trọng, Q.1, TP.HCM' },
        ],
      },
      {
        name: 'Hột vịt lộn',
        emoji: '🥚',
        description:
          'Trứng vịt lộn luộc ăn kèm rau răm, muối tiêu chanh — món đêm khuya kinh điển Sài Gòn.',
        origin: 'TP.HCM',
      },
      {
        name: 'Bánh tráng trộn',
        emoji: '🥗',
        description:
          'Bánh tráng cắt sợi trộn trứng cút, bò khô, rau răm, nước sốt — snack đường phố cực hot.',
        origin: 'TP.HCM',
      },
      {
        name: 'Bánh khọt Vũng Tàu',
        emoji: '🫓',
        description:
          'Bánh bột gạo đúc khuôn nhỏ, nhân tôm, ăn kèm rau sống cuốn bánh tráng — giòn rụm thơm béo.',
        origin: 'Bà Rịa-Vũng Tàu',
        places: [
          { name: 'Bánh Khọt Gốc Vú Sữa', address: '14 Nguyễn Trường Tộ, Vũng Tàu' },
        ],
      },
      {
        name: 'Gà ta Đồng Nai',
        emoji: '🍗',
        description:
          'Gà ta vườn nuôi thả rông, luộc hoặc nướng than — thịt chắc ngọt, da giòn vàng ươm.',
        origin: 'Đồng Nai',
      },
      {
        name: 'Bánh tráng phơi sương',
        emoji: '🌙',
        description:
          'Bánh tráng dẻo mềm phơi sương đêm, cuốn thịt luộc rau sống chấm mắm nêm — đặc sản Tây Ninh.',
        origin: 'Tây Ninh',
        places: [
          { name: 'Bánh Tráng Trảng Bàng Tây Ninh', address: 'Quốc lộ 22, Trảng Bàng' },
        ],
      },
      {
        name: 'Muối tôm Tây Ninh',
        emoji: '🦐',
        description:
          'Muối ớt xay tôm khô nguyên chất — mặn cay ngọt, chấm trái cây cực đỉnh.',
        origin: 'Tây Ninh',
      },
      {
        name: 'Bánh bèo bì Bình Dương',
        emoji: '🍥',
        description:
          'Bánh bèo mỏng mềm, bì heo xắt sợi, nước mắm pha ngọt — hương vị miền Đông giản dị.',
        origin: 'Bình Dương',
      },
      {
        name: 'Hạt điều rang muối',
        emoji: '🥜',
        description:
          'Hạt điều Bình Phước rang bơ/muối — bùi béo thơm ngậy, đặc sản vùng đất đỏ.',
        origin: 'Bình Phước',
      },
    ],
  },
  {
    id: 'tay-nam-bo',
    name: 'Đồng bằng sông Cửu Long',
    nameShort: 'ĐBSCL',
    color: '#FFB830',
    description:
      'Miền sông nước phù sa — ẩm thực mộc mạc, phóng khoáng với hải sản, cá đồng và hương vị đồng quê.',
    markerX: 150,
    markerY: 750,
    dishes: [
      {
        name: 'Lẩu mắm',
        emoji: '🫕',
        description:
          'Nước lẩu nấu từ mắm cá linh/cá sặc, rau đồng ăn kèm — tinh tuý vùng sông nước.',
        origin: 'Cần Thơ',
        places: [
          { name: 'Lẩu mắm Đại Hải', address: 'Đường 3/2, Ninh Kiều, Cần Thơ' },
        ],
      },
      {
        name: 'Bánh xèo miền Tây',
        emoji: '🥞',
        description:
          'Bánh xèo to bản, vỏ giòn vàng nhân tôm, thịt, giá đỗ — cuốn rau rừng, chấm nước mắm chua ngọt.',
        origin: 'Cần Thơ',
      },
      {
        name: 'Cá lóc nướng trui',
        emoji: '🐟',
        description:
          'Cá lóc nguyên con vùi trong rơm rạ nướng cháy — tách ra thịt trắng thơm lừng, chấm muối ớt chanh.',
        origin: 'Đồng Tháp',
      },
      {
        name: 'Bánh cống',
        emoji: '🍘',
        description:
          'Đậu xanh, thịt, tôm nhồi trong khuôn chiên ngập dầu giòn rụm — đặc sản vùng Sóc Trăng.',
        origin: 'Sóc Trăng',
      },
      {
        name: 'Bún nước lèo',
        emoji: '🍜',
        description:
          'Bún nước lèo mắm bò hóc đặc trưng Khmer, rau muống bào, giá — đậm đà khó quên.',
        origin: 'Sóc Trăng',
        places: [
          { name: 'Bún nước lèo Cô Ba', address: '21 Trần Hưng Đạo, Sóc Trăng' },
        ],
      },
      {
        name: 'Bún mắm Châu Đốc',
        emoji: '🦐',
        description:
          'Bún nước mắm cá đậm đà, topping tôm, mực, heo quay — phiên bản đỉnh cao của lẩu mắm.',
        origin: 'An Giang',
      },
      {
        name: 'Hủ tiếu Mỹ Tho',
        emoji: '🍜',
        description:
          'Sợi hủ tiếu dai mềm trong nước dùng xương heo ngọt thanh, giá, hẹ, thịt — gốc Mỹ Tho chính hiệu.',
        origin: 'Tiền Giang',
        places: [
          { name: 'Hủ Tiếu Mỹ Tho Chú Sáu', address: 'Chợ Mỹ Tho, Tiền Giang' },
        ],
      },
      {
        name: 'Kẹo dừa Bến Tre',
        emoji: '🥥',
        description:
          'Kẹo nấu từ nước cốt dừa nguyên chất, cuốn bánh tráng — dẻo ngọt bùi, xứ dừa nghìn năm.',
        origin: 'Bến Tre',
      },
      {
        name: 'Chuối nếp nướng',
        emoji: '🍌',
        description:
          'Chuối bọc nếp dẻo nướng than hoa, phết nước cốt dừa — thơm lừng đường phố miền Tây.',
        origin: 'Vĩnh Long',
      },
      {
        name: 'Bún nước lèo Trà Vinh',
        emoji: '🍲',
        description:
          'Bún mắm prohok gốc Khmer, nước dùng cá lóc đậm đà — ăn kèm rau đắng, bông súng.',
        origin: 'Trà Vinh',
      },
      {
        name: 'Nước mắm Phú Quốc',
        emoji: '🫙',
        description:
          'Nước mắm cốt cá cơm ủ thùng gỗ 12 tháng — hương vị tinh tuý, quốc hồn quốc tuý.',
        origin: 'Kiên Giang',
      },
      {
        name: 'Bún bò cay Bạc Liêu',
        emoji: '🌶️',
        description:
          'Bún bò nước lèo cay nồng sả ớt, thịt bò mềm — hương vị đặc trưng miệt Bạc Liêu.',
        origin: 'Bạc Liêu',
      },
      {
        name: 'Cua Năm Căn',
        emoji: '🦀',
        description:
          'Cua biển Cà Mau rang muối, hấp bia — thịt chắc ngọt lịm, vùng rừng ngập mặn.',
        origin: 'Cà Mau',
        places: [
          { name: 'Chợ Năm Căn', address: 'TT. Năm Căn, Cà Mau' },
        ],
      },
      {
        name: 'Cá lóc nướng trui',
        emoji: '🔥',
        description:
          'Cá lóc đồng nướng rơm nguyên con — cuốn lá sen, rau sống, chấm nước mắm me chua ngọt.',
        origin: 'Hậu Giang',
      },
    ],
  },
]
