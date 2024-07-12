setInterval(() => {
    self.postMessage("still alive");
}, 5 * 60 * 1000); // Gửi tin nhắn mỗi 4 phút
