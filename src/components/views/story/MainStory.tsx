import { ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

export default function MainStory() {
  return (
    <Box px={{ base: 4, md: "10%" }} py={"5rem"}>
      <Flex justifyContent={"space-around"}>
        <Stack align={"center"} spacing={"1rem"}>
          <Avatar src="https://bit.ly/dan-abramov" />
          <Text fontFamily={"Lato"} fontSize={"12px"}>
            oleh <b>Rangga Permana</b>
          </Text>
          <HStack>
            <ViewIcon />
            <Text fontFamily={"Lato"} fontWeight={"bold"} fontSize={"12px"}>
              84.5K
            </Text>
          </HStack>
        </Stack>
        <Stack maxW={"40rem"}>
          <Image
            src={`/assets/img/data/cerita/ilustrasi/ilustrasi.png`}
            alt=""
          />
          <Text
            textAlign={"justify"}
            fontFamily={"Lato"}
            fontSize={"14px"}
            color={"textBody"}
          >
            Alkisah pada jaman dahulu kala seekor babi tengah melintas di sebuah
            hutan belantara. Babi hutan itu sedang merasa kehausan di tengah
            panasnya terik matahari. Pada saat dia mencari-cari mata air, dia
            melihat ada air yang tertampung di pohon keladi hutan. Segera
            diminumnya air itu untuk melepas dahaga. Tanpa disadarinya air itu
            adalah air seni Raja Sungging Perbangkara. Karena kesaktian Raja
            Sungging Perbangkara, babi hutan itu pun mengandung setelah meminum
            air seninya. Sembilan bulan kemudian si babi hutan melahirkan
            seorang bayi perempuan. Raja Sungging Perbangkara mengetahui perihal
            adanya bayi perempuan yang terlahir karena air seninya itu. Ia pun
            pergi ke hutan untuk mencarinya. Ditemukannya bayi prempuan itu. Dia
            pun memberinya nama Dayang Sumbi dan membawanya pulang ke istana
            kerajaan. Dayang Sunbi tumbuh menjadi perempuan yang sangat cantik
            wajahnya. Serasa tak terbilang jumlah raja, pangeran dan bangsawan
            yang berkehendak memperistri anak perempuan Raja Sungging
            Perbangkara itu. Namun, semua pinangan itu di tolak Dayang Sumbi
            dengan halus. Sama sekali tidak diduga oleh Dayang Sumbi , mereka
            yang ditolak pinangannya itu saling berperang sendiri untuk
            memperebutkan dirinya. Dayang Sumbi sangat bersedih mengetahui
            kenyataan bahwa para pangeran, raja dan bangsawan yang ditolaknya
            saling melakukan peperangan. Dia pun memohon kepada Raja Sungging
            Perbangkara untuk mengasingkan diri. Sang Raja akhirnya mengijinkan
            anaknya tersebut untuk mengasingkan diri. Dayang Sumbi mengasingkan
            diri di sebuah bukit ditemani oleh seekor anjing jantan bernama si
            tumang. Untuk mengisi waktu luangnya selama dalam pengasingan,
            Dayang Sumbi pun menenun. Alkisah, ketika Dayang Sumbi sedang
            menenun, peralatan tenunannya terjatuh. Ketika itu Dayang Sumbi
            merasa malas untuk mengambilnya. Terlontarlah ucapan yang tidak
            terlalu disadarinya.” Siapapun juga yang bersedia mengambilkan
            peralatan tenunku yang terjatuh, seandainya itu lelaki akan
            kujadikan suami, jika dia perempuan dia akan kujadikan saudara.” Tak
            disangka si tumang mengambil peralatan tenun yang terjatuh itu dan
            memberikannya kepada Dayang Sumbi. Tidak ada yang dapat diperbuat
            Dayang Sumbi selain memenuhi ucapannya. Dia menikah dengan Si Tumang
            yang ternyata titisan dewa. Si Tumang adalah dewa yang dikutuk
            menjadi hewan dan dibuang ke bumi. Beberapa bulan setelah menikah,
            Dayang Sumbi pun mengandung dan melahirkan seorang bayi laki-laki.
            Dayang Sumbi memberinya nama Sangkuriang. Waktu terus berlalu.
            Beberapa tahun kemudian terlewati. Sangkuriang telah tumbuh menjadi
            seorang pemuda yang tampan wajahnya. Gagah. Tubuhnya kuat dan kekar.
            Sakti mandraguna pula anak Dayang Sumbi ini. Sejak kecil Sangkuriang
            telah senang berburu. Setiap kali melakukan perburuan di hutan.
            Sangkuriang senantiasa ditemani oleh si tumang. Sama sekali
            Sangkuriang tidak tahu bahwa si Tumang adalah ayah kandungnya. Pada
            suatu hari Sangkuriang dengan di temani Si Tumang kembali meakukan
            perburuan di hutan. Sangkuriang berniat mencari kijang karena ibunya
            sangat menghendaki memakan hati kijang. Setelah beberapa saat berada
            di dalam hutan, Sangkuriang melihat seekor kijang yang tengah
            merumput di balik semak belukar. Sangkuriang memerintahkan si tumang
            untuk mengejar kijang itu Sangat aneh, si Tumang yang biasanya
            penurut, ketika itu tidak menuruti perintahnya. Sangkuriang menjadi
            marah. Katanya.” Jika engkau tetap tidak menuruti perintahku,
            niscaya aku akan mebunuhmu.” Ancaman Sangkuriang seakan tidak
            dipedulikan si Tumang. Karena jengkel dan marah, Sangkuriang lantas
            membunuh si Tumang. Hati anjing hitam itu diambilnya dan dibawanya
            pulang ke rumah. Sangkuriang memberikan hati si Tumang kepada ibunya
            untuk dimasak.
          </Text>
        </Stack>
        <Box width={"8rem"} />
      </Flex>
    </Box>
  );
}
