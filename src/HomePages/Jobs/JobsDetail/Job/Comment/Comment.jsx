import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentJob } from "../../../../../apis/jobsAPI";
import { Button, Grid, Input } from "@mui/material";
import style from "./styleComment.module.scss";
import StarIcon from "@mui/icons-material/Star";
import { postComment } from "../../../../../apis/user";

export default function Comment() {
  const { id } = useParams();
  const { data = [], refetch } = useQuery({
    queryKey: ["Comment", id],
    queryFn: () => getCommentJob(id),
  });
  console.log(data);

  const mutation = useMutation({
    mutationFn: (payload) => postComment(payload),
    onSuccess: () => {
      refetch();
    },
  });

  const [newComment, setNewComment] = useState("");

  const handlePostComment = () => {
    // Thực hiện mutation khi người dùng click vào nút "Add Comment"
    mutation.mutate({
      jobId: id,
      content: newComment,
      // Các thông tin khác cần thiết
    });
  };
  return (
    <Grid className={style.js1}>
      {data.map((item) => (
        <Grid key={item.id} className={style.js2}>
          <Grid container>
            <Grid>
              <img src={item.avatar} alt="" className={style.js21} />
            </Grid>
            <Grid className={style.js22}>
              <Grid container>
                <Grid className={style.js23}>{item.tenNguoiBinhLuan}</Grid>
                <Grid className={style.js24}>
                  <StarIcon /> <h3>{item.saoBinhLuan}</h3>{" "}
                </Grid>
              </Grid>
              <Grid className={style.js25}>
                <p>{item.noiDung}</p>
              </Grid>
              <Grid>{item.ngayBinhLuan}</Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}

      {/* POST COMMENT */}
      <Grid>
        <Grid>
          <Input
            placeholder="Nhập nội dung bình luận..."
            className={style.js3}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></Input>
        </Grid>
        <Grid className={style.js4}>
          <Button className={style.js41} onClick={handlePostComment}>
            Add Comment
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
