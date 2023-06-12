declare namespace Nvim {
  interface CommandOptions {
    bang: boolean;
    args?: string;
  }
  interface CommandAttributes {
    bang?: boolean;
    nargs?: string;
  }
}

/** @noSelf **/
declare namespace vim {
  namespace opt {
    const rtp: {
      prepend: (path: string) => void;
    };
  }

  const split: (s: string, sep: string) => string[];
  const print: (arg: string) => void;
  const cmd: (command: string) => void;

  namespace api {
    const nvim_command: (src: string) => void;
    const nvim_exec2: (
      src: string,
      opts?: { output: boolean },
    ) => { output: string | null };
    const nvim_get_current_buf: () => number;
    const nvim_get_current_win: () => number;
    const nvim_buf_call: (bufnr: number, callback: () => void) => void;
    const nvim_buf_get_lines: (
      bufnr: number,
      start: number,
      end: number,
      strictIndexing: boolean,
    ) => string[];
    const nvim_buf_set_name: (bufnr: number, name: string) => void;
    const nvim_buf_set_lines: (
      bufnr: number,
      start: number,
      end: number,
      strictIndexing: boolean,
      replacement: string[],
    ) => string[];
    const nvim_buf_get_name: (bufnr: number) => string;
    const nvim_buf_create_user_command: (
      bufnr: number,
      name: string,
      command: (opts: Nvim.CommandOptions) => void,
      attributes: Nvim.CommandAttributes,
    ) => void;
    const nvim_buf_get_option: <T>(bufnr: number, name: string) => T;
    const nvim_buf_delete: (bufnr: number, opts?: { force?: boolean }) => void;
    const nvim_list_wins: () => number[];
    const nvim_win_get_buf: (win: number) => number;
    const nvim_win_set_buf: (win: number, bufnr: number) => void;
    const nvim_win_set_cursor: (
      win: number,
      pos: [row: number, col: number],
    ) => void;
    const nvim_buf_set_option: (
      buffer: number,
      name: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // deno-lint-ignore no-explicit-any
      value: any,
    ) => void;

    namespace api {
      const nvim_get_current_buf: () => number;
      const nvim_get_current_win: () => number;
      const nvim_buf_call: (bufnr: number, callback: () => void) => void;
      const nvim_buf_get_lines: (
        bufnr: number,
        start: number,
        end: number,
        strictIndexing: boolean,
      ) => string[];
      const nvim_buf_get_name: (bufnr: number) => string;
      const nvim_buf_create_user_command: (
        bufnr: number,
        name: string,
        command: (opts: Nvim.CommandOptions) => void,
        attributes: Nvim.CommandAttributes,
      ) => void;
      const nvim_buf_get_option: <T>(bufnr: number, name: string) => T;
      const nvim_buf_delete: (
        bufnr: number,
        opts?: { force?: boolean },
      ) => void;
      const nvim_list_wins: () => number[];
      const nvim_win_get_buf: (win: number) => number;
      const nvim_win_set_buf: (win: number, bufnr: number) => void;
      const nvim_win_set_cursor: (
        win: number,
        pos: [row: number, col: number],
      ) => void;
      const nvim_buf_set_option: (
        buffer: number,
        name: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // deno-lint-ignore no-explicit-any
        value: any,
      ) => void;
    }
  }

  namespace lsp {
    const set_log_level: (level: "DEBUG" | "ERROR") => void;

    namespace buf {
      const rename: (
        newName?: string,
        options?: Record<string, unknown>,
      ) => void;
    }
  }
}
