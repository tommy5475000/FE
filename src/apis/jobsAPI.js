import fetcher from "./fetcher";

export async function getMenuJobs() {
  try {
    const response = await fetcher.get("/cong-viec/lay-menu-loai-cong-viec");
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

export async function getDetailsJobs(jobId) {
  try {
    const response = await fetcher.get(
      "/cong-viec/lay-cong-viec-theo-chi-tiet-loai/",
      {
        params: {
          MaChiTietLoai: jobId,
        },
      }
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY DANH SÁCH CÔNG VIỆC THEO TÊN
export async function getJobsByName(TenCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-danh-sach-cong-viec-theo-ten/${TenCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY CHI TIẾT LOẠI CÔNG VIỆC
export async function getMenuByType(MaLoaiCongViec) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-chi-tiet-loai-cong-viec/${MaLoaiCongViec}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}

// LẤY CÔNG VIỆC THEO CHI TIẾT LOẠI
export async function getJobsByType(MaChiTietLoai) {
  try {
    const response = await fetcher.get(
      `/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${MaChiTietLoai}`
    );
    return response.data.content;
  } catch (error) {
    throw error.response.data.content;
  }
}


// export async function getJob(job) {
//   try {
//     const response = await fetcher.get(
//       "/cong-viec/lay-chi-tiet-loai-cong-viec/",
//       {
//         params: {
//           MaLoaiCongViec: job,
//         },
//       }
//     );
//     return response.data?.content;
//   } catch (error) {
//     throw error.response.data?.content;
//   }
// }

// export async function getJobs() {
//     try {
//         const response = await fetcher.get("/cong-viec/lay-danh-sach-cong-viec-theo-ten/", {
//             params: {
//                 TenCongViec: CongViec,
//             }
//         });
//         return response.data.content
//     } catch (error) {
//         throw error.response.data.content
//     }
// };
